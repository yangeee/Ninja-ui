<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
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
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2.5s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>
