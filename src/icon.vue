<template>
  <svg class="n-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>


<script>
import './svg'
export default {
  name: '',
  props: ['name']
}
</script>


<style lang="scss" scoped>
.n-icon {
  width: 1em;
  height: 1em;
  position: relative;
  top:1px;
}
</style>
