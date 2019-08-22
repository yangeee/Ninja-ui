<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NinjaTabsHead',
  inject: ['eventBus'],
  data(){
    return{
      first_left: -1
    }
  },
  created(){
    
  },
  mounted() {
    this.eventBus.$on('update:selected', (name, item) => {
      let {width, height, top, left} = item.$el.getBoundingClientRect()
      if(this.first_left === -1)
      this.first_left = left
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - this.first_left}px`
    })
  }
}
</script>


<style scoped lang="scss">
$tabs-height: 40px;
$blue: #409EFF;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  border-bottom: 2px solid $border-color;
  > .line {
    position: absolute;
    bottom: -2px;
    left: 0;
    border-bottom: 2px solid $blue;
    transition: all 300ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display:flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
