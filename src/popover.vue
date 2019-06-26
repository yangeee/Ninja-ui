<template>
  <div class="popover" ref="popover">
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
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    this.addPopoverListeners()
  },
  beforeDestroy() {
    this.putBackContent()
    this.removePopoverListeners()
  },
  methods: {
    addPopoverListeners() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    removePopoverListeners() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    putBackContent() {
      const { contentWrapper, popover } = this.$refs
      if (!contentWrapper) { return }
      popover.appendChild(contentWrapper)
    },
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'

    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) { return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
      this.close()
    },
    close() {
      this.visible = false
      console.log(this.visible)
      document.removeEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
      console.log(this.visible)
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
          console.log('我被点击了')
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
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 5px; /* 这里要加上三角形的高度5px */
    transform: translateY(100%);
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top:none;
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
      border-right: none;
      border-left-color: black;
      top: 50%;
      left: 100%;
    }
    &::after {
      border-right: none;
      border-left-color: white;
      top: 50%;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      border-left: none;
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left: none;
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
