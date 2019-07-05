<template>
  <div>
    <n-button>默认按钮</n-button>
    <n-button icon="settings">设置按钮</n-button>
    <n-button :loading="true">加载按钮</n-button>
    <n-button disabled="true">禁用按钮</n-button>
    <p>代码展示：</p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import Button from "../../../src/button";
export default {
  components: {
    'n-button': Button
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


