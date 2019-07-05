module.exports = {
  base:'/Ninja-ui/',
  title: 'Ninja-UI',
  description: '一个简单、易用的UI库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' }
    ],
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/layout',
          '/components/grid',
          '/components/toast',
          '/components/popover',
        ]
      }
    ]
  }
}
