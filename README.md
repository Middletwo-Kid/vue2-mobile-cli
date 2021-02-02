# vue2-moblie-cli

## 使用说明
```bash
git clone https://github.com/Middletwo-Kid/vue2-mobile-cli.git

cd vue2-mobile-cli

yarn

npm run serve
```
---

## 特点
- vue(2.6.10)
- vuex
- vue-router
- typescript
- sass
- 移动端界面适配，自动转为vw
- 引入并封装了axios
- 按需引入vant
- git（husky + @commitlint/cli）规范
- ESlint
- 优化了打包体积
- 优化了构建速度
- style规范

---

## 目录结构
主要说明`src`目录：

## api
用来存放接口。
```bash
|-- api                     # 接口文件
  |-- config.ts             # 请求接口的baseUrl配置
  |-- note.ts               # 各个模块请求的接口存放在单独的一个文件
  |-- index.ts              # 引入所有接口并导出          
```

## assets
用来存放样式文件和字体文件等。如果需要新建全局样式文件，新建之后需要修改`vue.config.js`中的`prependData`，但是引入过多会影响性能。
```bash
|-- assets
  |-- style                 # 样式文件
    |-- var.scss            # 全局css变量
    |-- reset.scss          # css初始化
    |-- common.scss         # 公用样式                        
```

## plugins
用来全局挂载插件。
```bash                   
|-- plugins                 
  |-- axios.ts              # 全局挂载axios
  |-- vant.ts               # 全局挂载vant
```

## router
用来管理路由，新增路由文件之后，需要在`index.ts`中引入。
```bash                   
|-- router
  |-- note.ts               # 各个模块的路由存放在单独的一个文件
  |-- index.ts              # 引入所有路由，做路由守卫并导出
```

## store
用来管理store， 新增vuex管理文件之后，需要在`index.ts`中引入。
```bash                   
|-- store  
  |-- index.js              # 引入所有vuex的管理并导出
  |-- module  
    |-- note.ts             # 各个模块的vuex控制存放在单独的一个文件    
```

## utils
用来存放所有工具函数。
```bash                   
|-- utils           
  |-- axios.ts              # 封装axios   
```

## views
用来存放页面。
```bash                   
|-- views
  |-- note                  # 封装note模块下的页面 
    |-- Add.vue               
    |-- Details.vue               
  |-- Home.vue
  |-- About.vue
  |-- 404.vue
```

## 其他
```bash                   
|-- components              # 存放组件
|-- filters                 # 存放过滤器
```

---
## 最后
后续还有继续优化，如有问题欢迎指出，感谢~ 
如果对你有帮助，能给个star嘛 :sparkling_heart:

附上开发心得:[手把手教你搭建集成Vue全家桶、vant和axios等模块的移动端脚手架](https://blog.csdn.net/qq_34086980/article/details/113183941)