<template>
  <div class="tabs">
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
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
  },
  mounted(){
      this.eventBus.$emit('update:selected', this.name)
  }
}
</script>


<style scoped lang="scss">
.tabs {
}
</style>
