<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: 'NinjaPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      console.log(top, left)
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top - height + window.scrollY + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.contentWrapper === e.target)
      ) { console.log(e.target); return }
      this.close()
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>


<style scoped lang='scss'>
.popover {
  display: inline-block;
  vertical-align: top;
  margin: 200px;
  position: relative;
}
.content-wrapper {
  position: absolute;
}
</style>
