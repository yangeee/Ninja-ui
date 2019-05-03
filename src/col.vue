<template>
  <div
    class="col"
    :class="[`col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px', paddingRight:gutter/2+'px'}"
  >
    <div style="border:1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'n-col',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  data() {
    return {
      gutter: 0
    }
  },
  mounted() {

  }
}
</script>


<style scoped lang="scss">
.col {
  height: 100px;
}

$class: col-;

@for $n from 1 through 24 {
  .#{$class}#{$n} {
    width: ($n/24) * 100%;
  }
}

$offset: offset-;

@for $n from 1 through 24 {
  .#{$offset}#{$n} {
    margin-left: ($n/24) * 100%;
  }
}
</style>
