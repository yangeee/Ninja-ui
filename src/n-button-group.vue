<template>
  <div class="n-button-group">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: '',
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if (name !== 'button'){
        console.warn(`n-button-gruop的子元素只能是n-button哦,但你写的是${node.nodeName}`)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.n-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .n-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
