export default defineConfig({
  // ...前面的 base 等配置保持不变...

  themeConfig: {
    // 1. 网站左上角的 Logo
    logo: '/avatar.jpg', 

    // 2. 顶部导航栏 (Nav)
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/posts/Script/' }, //以此类推
      { text: '编程', link: '/posts/Tech/' },
      { 
        text: '关于我', 
        items: [
          { text: 'GitHub', link: 'https://github.com/wsqept' },
          { text: '联系方式', link: '/contact' }
        ]
      }
    ],

    // 3. 社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsqept' },
      // 还可以加 twitter, discord 等
    ],

    // 4. 页脚
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2024 wsqept'
    },
    
    // 5. 开启本地搜索 (非常实用！)
    search: {
      provider: 'local'
    }
  }
})