<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>


<script>

export default {
  name: 'NinjaToast',
  data(){
      return{
      }
  }
}
</script>


<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,0.8);
    .toast{
        position: fixed;
        top: 0;
        left: 50%;
        color: white;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    }

</style>
