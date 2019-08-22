<template>
  <div>
    <h2>基础用法</h2>
    <n-popover position="left">
      <template v-slot:content>
        <h3>标题</h3>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </template>
      <n-button>左边</n-button>
    </n-popover>
    <n-popover position="top">
      <template v-slot:content>
        <h3>标题</h3>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </template>
      <n-button>上边</n-button>
    </n-popover>
    <n-popover position="bottom">
      <template v-slot:content>
        <h3>标题</h3>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </template>
      <n-button>下边</n-button>
    </n-popover>
    <n-popover position="right">
      <template v-slot:content>
        <h3>标题</h3>这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </template>
      <n-button>右边</n-button>
    </n-popover>
  </div>
</template>


<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    'n-popover': Popover,
    'n-button': Button

  },
  data() {
    return {

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

