<h1 align="center">npm install @kaokei/use-react-service</h1>

<div align="center">

[![Build Status](https://github.com/kaokei/use-react-service/actions/workflows/build.yml/badge.svg)](https://github.com/kaokei/use-react-service/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/kaokei/use-react-service/badge.svg?branch=main)](https://coveralls.io/github/kaokei/use-react-service?branch=main)
[![Downloads](https://img.shields.io/npm/dm/@kaokei/use-react-service.svg?sanitize=true)](https://npmcharts.com/compare/@kaokei/use-react-service?minimal=true)
[![Version](https://img.shields.io/npm/v/@kaokei/use-react-service.svg?sanitize=true)](https://www.npmjs.com/package/@kaokei/use-react-service)
[![License](https://img.shields.io/npm/l/@kaokei/use-react-service.svg?sanitize=true)](https://www.npmjs.com/package/@kaokei/use-react-service)
![GitHub Created At](https://img.shields.io/github/created-at/kaokei/use-react-service?style=social)

</div>

灵感来自 angular 中的服务的概念。在 angular 中不需要全局唯一的数据源 store。而是通过声明服务，以及向组件中注入服务来达到数据管理以及数据共享的。

本库也是实现了类似的效果，可以通过依赖注入实现面向服务编程、实现领域驱动开发。从而可以代替 vuex。

本库通过类来声明服务，对 typescript 支持非常棒。

- [入门指南](./docs/guide/)
- [API 文档](./docs/api/)
- [博客文章](./docs/note/01.父组件与子组件的理解.md)
- [codesandbox example](https://codesandbox.io/s/di-playground-zjnyv)
- [online demo](https://use-react-service.vercel.app/)

## 待修改的 5 个名字

- 项目名，也就是项目文件夹的名称，这个在我们创建项目时就已经指定了。
- package.json 中的 name，这个大多数时可能就是和项目名一致了，但是如果是带有 scope 的，或者驼峰的，都需要自己修改。
- package.json 中的 browserVariableName，这个大多数情况下不关心也不会有问题，但是如果我们想要编译的代码想要在浏览器中直接使用，最好是指定一个全局变量。
- package.json 中的 homepage，bugs-url，repository-url 这些外部链接。
- README.md 中的 github 地址。

## github 地址

- [github](https://github.com/kaokei/use-react-service)

## 解决了什么问题？

## 整体方案以及使用方式

## 特性

使用 typescript，并且类型定义统一在 types 文件夹中，建议使用 module 来管理类型，而不是 script 来创建全局的类型。
`tsconfig.json`作为编辑器的默认配置文件，方便编辑器识别。实际构建时使用`tsconfig.app.json`文件

使用 esm 模块化规范

使用 npm 作为包管理

使用 git 作为代码版本工具。

编码规范使用 eslint+prettier+editorconfig

git commit message 采用 angular 规范，以及使用 commitlint 校验

使用 yorkie 自动化校验并格式化代码，自动化校验 commit message

使用 jest 作为单元测试，统一放在`tests`文件夹中。

可以在 playground 中进行代码实验，使用 vscode 配置.vscode/launch.json 可以调试 nodejs

使用 rollup 作为打包工具，同时打包出多个版本的 bundle。支持压缩/未压缩、使用 runtime/不使用 runtime、commonjs/esm、浏览器版本总共 10 个版本。

npm run release:first 第一次发布，会自动创建 CHANGELOG.md 文件
npm run release patch 发布新版本

使用 MIT 作为开源协议

## todos

1. 不想写那么复杂的watchsource，实际上就是mapstatetoprops，还有就是分成多个useSelector
2. 复杂对象的深层引用，比如业务实际使用的是a.b.c，watchsource是否可以写a.b，还是必须a.b.c
3. 对比daishi的3个状态库，分析它们的forceupdate是怎么实现的？是否依赖于usesyncexternalstore
4. getRootService也需要第2个参数来订阅变化的属性
5. 当前还不支持严格模式，需要适配一下

## 为什么不使用 @testing-library 测试框架

[参考这个文档](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)

我理解有很多软件库都是opinionated。但是这个库是我第一次完全不能接受的。

完全是在教我怎么写代码。而且我并不认同不提供getById和getByClassName这两个API就能提升单元测试的质量。

更不用说需要在项目代码中增加很多role, label, data-testid这些为了测试才增加的属性。

实际上在开发代码时我并不会去增加这些属性，更不想单独为了测试去增加这些属性。

相反通过id/class来获取dom是很正常的需求。所以还是更换一个合适的测试框架吧。
