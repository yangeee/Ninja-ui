<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'n-row',
  props: {
    gutter: {
      type: [Number, String]
    },
    align:{
      type: String,
      validator(value){
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  mounted() {
    this.$children.forEach(e => {
      e.gutter = this.gutter
    })
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }

  }

}
</script>


<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
