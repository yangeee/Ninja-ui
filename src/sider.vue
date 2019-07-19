<template>
  <transition name="fade">
    <div  class="sider" v-if="visible">
      <slot></slot>
    <button @click="visible=false">close</button>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'NinjaSider',
  data() {
    return {
      visible: true
    }
  },
  methods: {
    hide() {

    }
  }
}
</script>


<style scoped lang="scss">
.sider {
  border: 1px solid red;
  position: relative;
  > button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
