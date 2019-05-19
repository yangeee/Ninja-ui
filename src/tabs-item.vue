<template>
    <div class="tabs-item" @click='xxx'>
        <slot></slot>
    </div>
</template>


<script>
export default {
  name: 'NinjaTabsItem',
  inject: ['eventBus'],
  props:{
      name:{
          type: String || Number,
          required: true
      },
      disabled: {
          type: Boolean,
          default: false
      }
  },
  created(){
    this.eventBus.$on('update:selected', (value)=>{
        console.log(value)
    })  
  },
  methods:{
      xxx(){
          this.eventBus.$emit('update:selected',this.name)
      }
  }
}
</script>


<style scoped lang="scss">
    .tabs-item{
        
    }
</style>
