---
title: 'Button - 按钮'
---

# Button 按钮

<h2 style="margin-bottom:1em;">基本用法</h2>    

<clientOnly>
<button-demos></button-demos>
</clientOnly>

<h2>代码展示</h2>

```vue
<n-button>默认按钮</n-button>
<n-button icon="left">向左按钮</n-button>
<n-button icon="settings" position="right">设置按钮</n-button>
<n-button loading>加载按钮</n-button>
<n-button disabled>禁用按钮</n-button>
```

<h2>Attributes</h2>

| 参数     |     说明     |  类型   |             可选值             | 默认值 |
| -------- | :----------: | :-----: | :----------------------------: | -----: |
| icon     |    图标名    | String  | left/right/info/error/download |      — |
| position |   图标位置   | String  |             right              |   left |
| loading  |   是否加载   | Boolean |               —                |  false |
| disabled | 是否禁用按钮 | Boolean |               —                |  false |
