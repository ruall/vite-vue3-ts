## 特性
yarn 

yarn dev

## 项目目录

```js
├── .husky                              // husky git hooks配置目录
    ├── _                               // husky 脚本生成的目录文件
    ├── commit-msg                      // commit-msg钩子，用于验证 message格式
    ├── pre-commit                      // pre-commit钩子，主要是和eslint配合
├── config                              // 全局配置文件
    ├── vite                            // vite 相关配置
    ├── constant.ts                     // 项目配置
    ├── themeConfig.ts                  // 主题配置
├── dist                                // 默认的 build 输出目录
├── mock                                // 前端数据mock
├── public                              // vite项目下的静态目录
└── src                                 // 源码目录
    ├── api                             // 接口相关
    ├── assets                          // 公共的文件（如image、css、font等）
    ├── components                      // 项目组件
    ├── directives                      // 自定义 指令
    ├── enums                           // 自定义 常量（枚举写法）
    ├── hooks                           // 自定义 hooks
    ├── layout                          // 全局布局
    ├── router                          // 路由
    ├── store                           // 状态管理器
    ├── utils                           // 工具库
    ├── views                           // 页面模块目录
        ├── login                       // login页面模块
        ├── ...
    ├── App.vue                         // vue顶层文件
    ├── auto-imports.d.ts               // unplugin-auto-import 插件生成
    ├── components.d.d.ts               // unplugin-vue-components 插件生成
    ├── main.ts                         // 项目入口文件
    ├── shimes-vue.d.ts                 // vite默认ts类型文件
    ├── types                           // 项目type类型定义文件夹
├── .editorconfig                       // IDE格式规范
├── .env                                // 环境变量
├── .eslintignore                       // eslint忽略
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── .npmrc                              // npm配置文件
├── .prettierignore                     // prettierc忽略
├── .prettierrc                         // prettierc配置文件
├── index.html                          // 入口文件
├── LICENSE.md                          // LICENSE
├── package.json                        // package
├── pnpm-lock.yaml                      // pnpm-lock
├── postcss.config.js                   // postcss
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite
```

