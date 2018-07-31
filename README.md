# 源码运行部分
```
# 如果没有 yarn 命令
npm i yarn -g

# 并且设置 npm 环境变量，设置完成后重新打开新的 cmd 窗口

# yarn 命令生效后运行
yarn install 
yarn start
```

# 源码开发过程部分(以下文档配置基于 windows7)
##  第一部分：环境安装
## 多页应用用到的技术
-  yarn
- webpack4.x
- webpack-cli
- es6
- babel
- handlebars
- html-webpack-plugin
- postcss
- extract-text-webpack-plugin@next

```
# 安装 yarn 包管理工具
npm i yarn -g

# 新建项目文件夹
mkdir XXX

# 设置环境变量
D:\Users\JIANGWEIJU015\AppData\Roaming\npm\

# 运行命令,如果命令没生效且已设置环境变量，请考虑重新打开命令行重新运行命令
yarn -v
```

# 第二部分：开发

## 开发思路
- 安装环境 yarn webpack webpack-cli 等
- 按照 webpack4 新特性编译一次默认的入口
- 给 js 文件加上 es6 的用法并且配置 babel
- babel 配置成功后添加 handlebars 配置
- 配置 html-webpack-plugin 生成 html 文件
- 配置 webpack-dev-server 热更新
- 添加 css 文件在 webpack 中的配置
- 在 webpack 中添加 postcss 配置
- 抽离样式文件 extract-text-webpack-plugin@next 插件

## 具体配置
```
# 进入新项目文件夹并用命令行打开并运行命令，选择全部默认即可,会生成 package.json
yarn init

# 安装 webpack 相关
yarn add webpack webpack-cli -D

# 安装 rimraf 用于删除文件夹
yarn add rimraf -D

# 在  package.json 添加 script
"script": {
    "build": "webpack"
}

# 由于 webpack4.x 可以不需要配置 webpack.config.js 并且默认入口为 ./src/index.js 并且需要设置 mode

# 修改 package.json
"scripts": {
    "clean": "rimraf dist",
    "build:dev": "yarn clean && webpack --mode development",
    "build:prod": "yarn clean && webpack --mode production"
  },

# 新建默认入口文件之后就可以在命令行运行 yarn build 这个命令啦,构建成功可在目录下找到 dist 文件夹

# 配置 es6 过程, 需要新建 webpack.config.js ， 如 webpack.config.js 配置
yarn add babel babel-loader babel-preset-env -D

# 配置 handlebars 模板，配置请参看 webpack.config.js, 文件夹路径请参看当前源码
yarn add handlebars handlebars-loader extract-laoder html-loader -D

# 配置 html-webpack-plugin 插件，配置请参看 webpack.config.js
yarn add html-webpack-plugin -D

# 配置 webpack-dev-server 开发环境，热更新, 配置请参看 webpack.config.js
yarn add webpack-dev-server -D

# 配置 css, 请参考最后面参考文档中 css 配置一栏
yarn add style-loader css-loader -D

# 配置 postcss，配置请参考 webpack.config.js
yarn add postcss postcss-laoder -D

# 安装 Postcss 常用插件
yarn add precss autoprefixer cssnano -D

# 配置 postcss.config.js 文件，具体配置请参考 postcss.config.js

# 配置 .browserslistrc 文件，具体参考 .browserslistrc

# 抽离样式文件,具体配置请参考 webpack.config.js
yarn add extract-text-webpack-plugin@next -D
```

# 参考文档 
- Babel 中文网地址: https://www.babeljs.cn/docs/plugins/preset-env/#usebuiltins
- handlebars partial配置：https://github.com/pcardune/handlebars-loader/blob/master/examples/partialDirs/webpack.config.js
- handlebars-loader配置：https://webpack.docschina.org/loaders/extract-loader/#src/components/Sidebar/Sidebar.jsx
- css 配置：https://webpack.docschina.org/loaders/css-loader/#安装
- postcss 配置： https://webpack.docschina.org/loaders/postcss-loader/#install
- 抽离样式： https://webpack.docschina.org/plugins/extract-text-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
- browserslist配置： https://www.npmjs.com/package/browserslist