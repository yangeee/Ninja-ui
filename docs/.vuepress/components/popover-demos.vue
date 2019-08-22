<template>
  <div>
    <n-popover position="right">
      <template v-slot:content>祝你发财奥</template>
      <n-button>点我</n-button>
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


