<template>
  <div>
    
  </div>
</template>


<script>
import Layout from "../../../src/layout";
export default {
  components: {
    'n-layout': Layout
  },
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置按钮</g-button>
        <g-button :loading="true">加载按钮</g-button>
        <g-button disabled="true">禁用按钮</g-button>
         `.trim().replace(/\t+| +/g, '')
    }   
    
  }
}
</script>


