<template>
  <button class="n-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <n-icon class="icon" v-if="icon && !loading" :name="icon"></n-icon>
    <n-icon class="loading icon" name="loading" v-if="loading"></n-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>


<script>
import Icon from './icon'

export default {
  name: '',
  components: {
    nIcon: Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return (value === 'left' || value === 'right') ? true : false
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$border-radius: 4px;
$button-active-bg: #eee;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite linear;
}
.n-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:foucs {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>