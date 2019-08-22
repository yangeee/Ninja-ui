<template>
  <div>
    <h2>基础用法</h2>
    <n-button>默认按钮</n-button>
    <n-button icon="left">向左按钮</n-button>
    <n-button icon="settings" position="right">设置按钮</n-button>
    <n-button loading>加载按钮</n-button>
    <n-button disabled>禁用按钮</n-button>
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
        <n-button>默认按钮</n-button>
        <n-button icon="settings">设置按钮</n-button>
        <n-button loading>加载按钮</n-button>
        <n-button disabled="true">禁用按钮</n-button>
         `.trim().replace(/\t+| +/g, '')
    }

  }
}
</script>


<style lang="scss" scoped>
h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}
</style>


