<template>
    <div>
        <div class="name">{{ (name || 'please enter a lead name...') | uppercase }}</div>
        <input type="text" v-model="name">
        <button id="btnReset" type="button" @click="resetName">reset name</button>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data: function() {
        return {
            name: null
        };
    },
    created: function() {
        this.resetName();
    },
    methods: {
        resetName: function() {
            this.name = null
        }
    },
    filters: {
        uppercase: function(val) {
            return val.toUpperCase();
        }
    }
}
</script>
