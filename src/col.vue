<template>
  <div class="col" :class="[`col-${span}`]">
      <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'n-col',
  props:{
      span: [Number,String]
  }
}
</script>


<style scoped lang="scss">
.col {
  height: 100px;
  background: gray;
  width: 50%;
  border: 1px solid red;
}

$class: col-;

@for $n from 1 through 24{
    .#{$class}#{$n}{
        width: ($n/24)*100%;
    }
}
</style>
