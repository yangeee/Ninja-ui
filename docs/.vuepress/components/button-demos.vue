<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled="true">默认按钮</g-button>
    <p>代码展示：</p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import Button from "../../../src/button";
export default {
  components: {
    'g-button': Button
  },
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled="true">默认按钮</g-button>
         `.trim().replace(/\t+| +/g, '')
    }   
    
  }
}
</script>


