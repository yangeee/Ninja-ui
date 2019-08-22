<template>
  <div class="tabs" ref="tabs">
    <slot></slot>
  </div>
</template>


<script>
import Vue from "vue/dist/vue";
export default {
  name: 'NinjaTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      selected_item: this.selected
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name, item)=>{
      this.selected_item = name
    })
  },
  mounted() {
    if(this.$children.length ===0){
      console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-mav')
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'NinjaTabsHead') {
        vm.$children.forEach((item) => {
          if (item.$options.name === 'NinjaTabsItem' && item.name === this.selected_item) {
            this.eventBus.$emit('update:selected', item.name, item)
          }
        })
      }
    })
  }
}
</script>


<style scoped lang="scss">
.tabs {
}
</style>
