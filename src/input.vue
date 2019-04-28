<template>
  <div class="wrapper" :class="{'error':error}">
    <input type="text" :value="value" :disabled="disabled" 
    :readonly="readonly" 
    @change="$emit('change',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"
    @focus="$emit('focus',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    >
    <template v-if='error'>
    <icon name='error' class='icon icon-error'></icon>
    <span class="errorMessage">{{error}}</span>
   </template>
   </div>
</template>


<script>
import Icon from './icon'
export default {
  name: 'NinjaInput',
  components: {
    icon: Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>


<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$font-size: 12px;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){
    margin-right: .5em;
  }
  > input { height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
    &:hover { border-color: $border-color-hover; }
    &:focus { box-shadow: inset 0 1px 1px $box-shadow-color; outline: none; }
    &[disabled],
    &[readonly] { border-color: #bbb; color: #aaa; cursor: not-allowed; } }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMessage{
    color: $red;
  }
}
</style>
