<template>
  <button class="n-button" :class="{[`icon-${iconPosition}`]: true}">
    <n-icon class="icon" v-if="icon" :name="icon"></n-icon>
    <n-icon class="loading" name="loading"></n-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>


<script>
export default {
  name: '',
  props: {
    icon: {},
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
@keyframes spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
.loading{
  animation: spin 2s infinite linear;
}
.n-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
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
