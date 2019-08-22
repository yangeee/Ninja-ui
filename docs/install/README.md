---
title: '安装'
---

### 安装步骤 ###
安装前请确保已经安装好 Npm 与 Node.js

安装ninja-ui:
```
npm install ninja-ui
```

引入Ninja-ui:
```
import Vue from 'vue';
import NinjaUI from 'ninja-ui';
import App from './App.vue';

Vue.use(NinjaUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
<br>
可以愉快的使用相应的 UI 组件啦