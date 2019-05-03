<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'n-row',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    this.$children.forEach(e => {
        e.gutter = this.gutter
    });
  }

}
</script>


<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
