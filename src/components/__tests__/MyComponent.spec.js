import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  test('should initially show default message', () => {
    const wrapper = shallowMount(MyComponent);
    const expected = 'default msg'.toUpperCase();
    expect(wrapper.find('div.msg').text()).toBe(expected);
  });

  test('should display textbox value as message', () => {
    const name = 'Sanna Marin';
    const wrapper = shallowMount(MyComponent);
    wrapper.setData({
      msg: name
    });

    return Vue.nextTick().then(() => {
      const expected = name.toUpperCase();
      expect(wrapper.find('div.msg').text()).toBe(expected);
    });
  });

  test('should reset message after button click', () => {
    const wrapper = shallowMount(MyComponent);
    wrapper.setData({
      msg: 'x'
    });

    wrapper.find('button#btnReset').trigger('click');
    return Vue.nextTick().then(() => {
      const expected = 'default msg'.toUpperCase();
      expect(wrapper.find('div.msg').text()).toBe(expected);
    });
  });
});
