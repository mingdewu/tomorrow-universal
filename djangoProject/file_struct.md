├── assets                         // 资源文件。用于组织未编译的静态资源入LESS、SASS 或 JavaScript
├── components                     // 组件。用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
│   └── AppLogo.vue                // 默认logo组件
├── layouts                        // 布局。页面都需要有一个布局，默认为 default。它规定了一个页面如何布局页面。所有页面都会加载在布局页面中的 <nuxt /> 标签中。如果需要在普通页面中使用下级路由，则需要在页面中添加 <nuxt-child />。该目录名为Nuxt.js保留的，不可更改。
│   └── default.vue                // 默认模板页面
├── middleware                     // 中间件。存放中间件。可以在页面中调用： middleware: 'middlewareName' 。
├── pages                       　 // 页面。一个 vue 文件即为一个页面。index.vue 为根页面
│   └── index.vue                  // 默认首页面
├── plugins                        // 用于存放JavaScript插件的地方
├── static                         // 用于存放静态资源文件，比如图片
├── store                       　 // 用于组织应用的Vuex 状态管理。
├── .editorconfig                  // 开发工具格式配置
├── .eslintrc.js                   // ESLint的配置文件，用于检查代码格式
├── .gitignore                     // 配置git不上传的文件
├── nuxt.config.js                  // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
├── package.json                    //npm包管理配置文件
└── README.md                       // 说明文档