<template>
  <button class="g-button"><svg class="icon" v-if="icon"><use :xlink:href="`#i-${icon}`"></use></svg>按钮</button>
</template>


<script>
export default {
  name: '',
  props:['icon'],
  data(){
    return{

    }
  }
}
</script>


<style lang="scss" scoped>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex; justify-content: center; align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:foucs {
    outline: none;
  }
}
</style>
