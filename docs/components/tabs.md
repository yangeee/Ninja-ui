---
title: 'Tabs - 标签'
---

### 示例及使用方法

<clientOnly>
<tabs-demos></tabs-demos>
</clientOnly>

代码展示：

```
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
```
