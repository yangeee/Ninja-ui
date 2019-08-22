<template>
  <div>
    <n-tabs selected="tab1">
      <n-tabs-head>
        <n-tabs-item name="tab1">
          <n-icon name="settings"></n-icon>标签一
        </n-tabs-item>
        <n-tabs-item name="tab2">标签二</n-tabs-item>
        <n-tabs-item name="tab3" disabled>标签三</n-tabs-item>
      </n-tabs-head>
      <n-tabs-body>
        <n-tabs-pane name="tab1">标签一</n-tabs-pane>
        <n-tabs-pane name="tab2">标签二</n-tabs-pane>
        <n-tabs-pane name="tab3">标签三</n-tabs-pane>
      </n-tabs-body>
    </n-tabs>
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

    }

  }
}
</script>


