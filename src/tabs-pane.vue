<template>
    <div class="tabs-pane" :class="classes"  v-if="tabs_active">
        <slot></slot>
    </div>
</template>


<script>
export default {
  name: 'NinjaTabsPane',
  inject: ["eventBus"],
  props:{
      name: {
          type: Number | String,
          required: true
      }
  },
  data(){
      return{
          tabs_active: false
      }
  },
  computed:{
      classes(){
          return{
              tabs_active: this.tabs_active
          }
      }
  },
  created(){
      this.eventBus.$on('update:selected', (name)=>{
          return this.tabs_active = name === this.name
      })
  }
}
</script>


<style scoped lang="scss">
    .tabs-pane{
        &.tabs_active{
        }
    }
</style>
