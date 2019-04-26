# Ninja-ui - 一个 UI 组件

[![Build Status](https://travis-ci.org/yangeee/Ninja-ui.svg?branch=master)](https://travis-ci.org/yangeee/Ninja-ui)

## 介绍

一个上手简单、美观精细的 Vue-UI 框架,如同忍者刀刃出鞘，手起刀落，一气呵成～

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box

    ```
    *{box-sizing: border-box;}
    *::before{box-sizing: border-box;}
    *::after{box-sizing: border-box;}
    ```
    IE8 及以上浏览器都支持此样式

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --border-radius: 4px;
        --button-active-bg: #eee;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE15 及以上浏览器都支持此样式

2. 安装Ninja-ui
    ```
    npm i --save ninja-ui
    ```
3. 引入Ninja-ui
    ```
    import {Button,Icon,ButtonGroup} from 'ninja-ui'
    import 'ninja-ui/dist/index.css' 
    export default {
    name: 'app',
    components: {
        'n-button': Button,
        'n-icon': Icon
    }
    }
    ```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
