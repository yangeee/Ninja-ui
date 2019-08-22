---
title: 'Tabs - 标签'
---

# Tabs 标签
<h2 style="margin-bottom:1em;">基本用法</h2>    

<clientOnly>
<tabs-demos></tabs-demos>
</clientOnly>

<h2>代码展示</h2>

```vue
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
```

<h2>Tabs Prop</h2>

| 参数     |     说明     |  类型  |     可选值      | 默认值 |
| -------- | :----------: | :----: | :-------------: | -----: |
| selected | 初始选中标签 | String | Item 的 name 值 |      - |

<h2>Tabs-Item Prop</h2>

| 参数     |   说明   |  类型   | 可选值 | 默认值 |
| -------- | :------: | :-----: | :----: | -----: |
| name     | 标签主题 | String  |  必选  |      - |
| disabled | 是否禁用 | Boolean |   -    |  false |

<h2>Tabs-Pane Prop</h2>

| 参数 |        说明        |  类型  | 可选值 | 默认值 |
| ---- | :----------------: | :----: | :----: | -----: |
| name | 对应主题的标签内容 | String |  必选  |      - |
