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
  mounted() {
    this.eventBus.$on('update:selected', (name, item) => {
      let {width, height, top, left} = item.$el.getBoundingClientRect()
      console.log(left)
      if(this.first_left === -1)
      this.first_left = left
      console.log(this.first_left)
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - this.first_left}px`
    })
  }
}
</script>


<style scoped lang="scss">
$tabs-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
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
