<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border:1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>


<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'n-col',
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    }
  },
  data() {
    return {
      gutter: 0,

    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    },
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this

      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ... (phone ? [`col-phone-${phone.span}`] : []),
        ... (ipad ? [`col-ipad-${ipad.span}`] : []),
        ... (narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ... (pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : [])

      ]
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



@media (min-width: 577px) {
  $class: col-ipad-;

  @for $n from 1 through 24 {
    .#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $offset: offset-ipad-;

  @for $n from 1 through 24 {
    .#{$offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width: 768px) {
  $class: col-narrowPc-;

  @for $n from 1 through 24 {
    .#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $offset: offset-narrowPc-;

  @for $n from 1 through 24 {
    .#{$offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width: 993px) {
  $class: col-pc-;

  @for $n from 1 through 24 {
    .#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $offset: offset-pc-;

  @for $n from 1 through 24 {
    .#{$offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width: 1281px) {
  $class: col-wide-pc-;

  @for $n from 1 through 24 {
    .#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $offset: offset-wide-pc-;

  @for $n from 1 through 24 {
    .#{$offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
