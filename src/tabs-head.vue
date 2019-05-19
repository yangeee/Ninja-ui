<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>


<script>
export default {
  name: 'NinjaTabsHead',
  inject: ['eventBus'],
  created(){
  }
}
</script>


<style scoped lang="scss">
    .tabs-header{
        
    }
</style>
