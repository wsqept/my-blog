import { defineConfig } from 'vitepress'

export default defineConfig({
  // ✪✪✪ 核心配置：解决网页样式加载失败的关键 ✪✪✪
  // 必须与你的 GitHub 仓库名一致，且前后都要有斜杠
  base: '/my-blog/', 

  // 站点基本信息
  title: "wsqept's Blog",
  description: "记录生活与技术",

  themeConfig: {
    // 1. 网站左上角的 Logo (确保 public 文件夹里有 avatar.jpg)
    logo: '/avatar.jpg', 

    // 2. 顶部导航栏 (Nav)
    // 注意：你设置了 /posts/Script/，请确保目录结构对应
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/posts/Script/' }, 
      { text: '编程', link: '/posts/Tech/' },
      { 
        text: '关于我', 
        items: [
          { text: 'GitHub', link: 'https://github.com/wsqept' },
          { text: '联系方式', link: '/contact' } // 记得创建 contact.md
        ]
      }
    ],

    // 3. 侧边栏 (Sidebar)
    // 我根据你的 Nav 自动帮你补全了侧边栏配置，否则点击导航进去左边是空的
    sidebar: {
      '/posts/Script/': [
        {
          text: '生活记录',
          items: [
            // 这里的 link 对应你实际创建的 .md 文件
            // 例如: /posts/Script/my-story.md
            { text: '示例文章', link: '/posts/Script/example' } 
          ]
        }
      ],
      '/posts/Tech/': [
        {
          text: '技术笔记',
          items: [
            // 例如: /posts/Tech/java.md
            { text: '示例笔记', link: '/posts/Tech/example' }
          ]
        }
      ]
    },

    // 4. 社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsqept' }
    ],

    // 5. 页脚
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2024 wsqept'
    },
    
    // 6. 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})