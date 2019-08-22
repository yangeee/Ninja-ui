<template>
  <div>
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

