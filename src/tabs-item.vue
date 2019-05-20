<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'NinjaTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: 'sports',
      item_active: true
    }
  },
  props: {
    name: {
      type: String || Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      return this.item_active = name === this.name
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  computed: {
    classes() {
      return {
        item_active: this.item_active
      }
    }
  }
}
</script>


<style scoped lang="scss">
$blue: blue;
.tabs-item {
  flex-shrink: 0;
  text-align: center;
  padding: 0 1em;
  border: 1px solid green;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.item_active {
    color: $blue;
  }
}
</style>
