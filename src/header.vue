<template>
  <div class="header">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: '',
  props: {
    height: {
      type: String,
      default: '60'
    }
  },
  mounted() {
    console.log(document.querySelector('.header').style)
  
  }
}
</script>


<style scoped lang="scss">
.header {
  background-color: #b3c0d1;
  height: 60px;
}
</style>
