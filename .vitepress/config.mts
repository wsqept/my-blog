import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "我的博客", // 对应原站的 "ff66ccff"
  description: "在这里写下你的网站描述",
  
  // 主题配置
  themeConfig: {
    // 顶部左侧 Logo
    logo: '/avatar.jpg', // 需要在 public 目录下放一张 avatar.jpg

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' }
    ],

    // 侧边栏 (博客文章列表)
    sidebar: {
      '/posts/': [
        {
          text: '编程',
          collapsed: false,
          items: [
            { text: '第一篇笔记', link: '/posts/coding/first-note' }
          ]
        },
        {
          text: '生活',
          collapsed: false,
          items: [
            { text: '碎碎念', link: '/posts/life/mumble' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 | Powered by VitePress'
    },
    
    // 本地搜索功能
    search: {
      provider: 'local'
    }
  }
})