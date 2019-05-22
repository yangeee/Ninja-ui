<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" @click.stop>
    <slot name="content" v-if="visible"></slot>
    </div>
    <slot></slot>
    
  </div>
</template>


<script>
export default {
  name: 'NinjaPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if (this.visible === true){
          this.$nextTick(()=>{
              let eventHandler = ()=>{
                  this.visible = false
                  document.removeEventListener('click', eventHandler)
              }
              document.addEventListener('click', eventHandler)
          })
      }else{
          
      }
      }
  }
}
</script>


<style scoped lang='scss'>
.popover {
  display: inline-block;
  vertical-align: top;
}
</style>
