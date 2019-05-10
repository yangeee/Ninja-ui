<template>
    <div class="toast">

    </div>
</template>


<script>
import Vue from 'vue/dist/vue'

Vue.prototype.$toast = function () {
    console.log('我是toast')
}
export default {
  name: 'NinjaToast',
}
</script>


<style lang="scss" scoped>
    .toast{

    }
</style>
