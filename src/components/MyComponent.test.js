import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('should initially show default message', () => {
    const wrapper = shallowMount(MyComponent);
    expect(wrapper.find('.name').text()).toBe('PLEASE ENTER A LEAD NAME...');
  });

  test('should display textbox value as message', () => {
    const name = 'sanna marin';
    const wrapper = shallowMount(MyComponent);
    wrapper.setData({
      name: name
    });

    return Vue.nextTick().then(() => {
      const nameUpper = name.toUpperCase();
      expect(wrapper.find('.name').text()).toBe(nameUpper);
    });
  });

  test('should reset message after button click', () => {
    const wrapper = shallowMount(MyComponent);
    wrapper.setData({
      name: 'x'
    });

    wrapper.find('button#btnReset').trigger('click');
    return Vue.nextTick().then(() => {
      expect(wrapper.find('.name').text()).toBe('PLEASE ENTER A LEAD NAME...');
    });
  });
});
