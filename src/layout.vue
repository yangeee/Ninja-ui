<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>


<script>
export default {
  name: 'NinjaLayout',
  data(){
      return{
          layoutClass:{
              hasSider: false
          }
      }
  },
  mounted(){
      this.$children.forEach(vm => {
          if(vm.$options.name === 'NinjaLayout'){
              this.layoutClass.hasSider = true
          }
      })
  }
}
</script>


<style scoped lang="scss">
    .layout{
        display: flex;
        font-display: column;
        border: 1px solid red;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>
