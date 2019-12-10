<template>
    <div>
        <div class="msg">{{ (msg || 'default msg') | uppercase }}</div>
        <input type="text" v-model="msg">
        <button id="btnReset" type="button" @click="resetMsg">reset message</button>
    </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data: function() {
        return {
            msg: null
        };
    },
    created: function() {
        this.resetMsg();
    },
    methods: {
        resetMsg: function() {
            this.msg = null
        }
    },
    filters: {
        uppercase: function(val) {
            return val.toUpperCase();
        }
    }
}
</script>
