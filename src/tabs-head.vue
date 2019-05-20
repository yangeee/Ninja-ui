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
  created() {
    this.eventBus.$on('update:selected', (name, item) => {
      console.log(item.$el)
    })
  }
}
</script>


<style scoped lang="scss">
$tabs-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .lines {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
