---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "@kaokei/use-react-service"
  text: '​React 状态管理 + 依赖注入'
  tagline: redux的替代品，灵感来自于 Angular Service。
  actions:
    - theme: brand
      text: Guide
      link: /guide/README
    - theme: alt
      text: API
      link: /api/README

features:
  - title: 深度 DI 集成​
    details: "基于 @kaokei/di 的依赖注入能力，支持在组件、服务、模块间实现声明式状态共享。通过分层解耦的依赖管理机制，显著提升复杂应用架构的灵活性，同时为单元测试提供细粒度控制能力。"
  - title: 响应式数据
    details: "基于 @vue/reactivity 的高性能响应式引擎，提供 ​Mutable 数据操作范式。支持直接修改状态对象并自动触发精准更新，依赖追踪粒度达属性级，无需额外 setState 操作，显著简化状态变更逻辑。"
  - title: 开箱即用的类型安全​
    details: 为 TypeScript 提供开箱即用的强力支持，精准的类型推导和验证贯穿状态访问与变更全过程，有效杜绝低级错误，提升开发效率和代码健壮性。
---

