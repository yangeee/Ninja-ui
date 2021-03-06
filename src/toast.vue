<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <span class="line" ref="line"></span>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>


<script>

export default {
  name: 'NinjaToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value){
        console.log(value)
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.8);
$animation-duration: 400ms;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-center {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  z-index: 111;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;

    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: slide-center $animation-duration;
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
}
.toast {
  color: white;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0px 16px;
  border-radius: 5px;
}
.line {
  border-left: 1px solid #666;
  height: 100%;
  margin: 0 16px;
}
.close {
  cursor: pointer;
}
</style>
