<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: 'NinjaPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'bottom') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'left') {
        let { height: height2 } = this.$refs.contentWrapper.getBoundingClientRect()
        console.log(height2)
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY +
          (height - height2) / 2 + 'px'
      }
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.contentWrapper === e.target)
      ) { return }
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
$border-color: #333;
$border-raidus: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  margin: 200px;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-raidus;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 0.5em 1em;
  word-break: break-all;
  max-width: 20em;
  &::before,
  &::after {
    content: "";
    border: 10px solid transparent;
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 5px; /* 这里要加上三角形的高度5px */
    transform: translateY(100%);
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      top: 50%;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      top: 50%;
      left: calc(100% - 1px);
    }
  }
}
</style>
