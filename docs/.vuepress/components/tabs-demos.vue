<template>
  <div>
    <n-tabs selected="woman">
      <n-tabs-head>
        <n-tabs-item name="woman">
          <n-icon name="settings"></n-icon>美女
        </n-tabs-item>
        <n-tabs-item name="sport" disabled>运动</n-tabs-item>
        <n-tabs-item name="man">男人</n-tabs-item>
      </n-tabs-head>
      <n-tabs-body>
        <n-tabs-pane name="woman">女人</n-tabs-pane>
        <n-tabs-pane name="sport">运动</n-tabs-pane>
        <n-tabs-pane name="man">男人</n-tabs-pane>
      </n-tabs-body>
    </n-tabs>
    <p>代码展示：</p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsPane from "../../../src/tabs-pane";
import TabsItem from "../../../src/tabs-item";
import Icon from "../../../src/icon";



export default {
  components: {
    'n-tabs': Tabs,
    'n-tabs-head': TabsHead,
    'n-tabs-body': TabsBody,
    'n-tabs-pane': TabsPane,
    'n-tabs-item': TabsItem,
    'n-icon': Icon,

  },
  data() {
    return {
      content: `
        <n-tabs selected="woman">
      <n-tabs-head>
          <n-tabs-item name="woman">
              <n-icon name="settings"></n-icon>美女
          </n-tabs-item>
          <n-tabs-item name="sport">
              运动
          </n-tabs-item>
          <n-tabs-item name="man">
              男人
          </n-tabs-item>
      </n-tabs-head>
      <n-tabs-body>
          <n-tabs-pane name="woman">
          </n-tabs-pane>
          <n-tabs-pane name="sport">
              运动
          </n-tabs-pane>
          <n-tabs-pane name="man">
              男人
          </n-tabs-pane>
      </n-tabs-body>
    </n-tabs>
         `.trim()
    }

  }
}
</script>


