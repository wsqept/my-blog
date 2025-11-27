import { defineConfig } from 'vitepress'

export default defineConfig({
  // ✪✪✪ 核心配置：解决网页样式加载失败的关键 ✪✪✪
  // 必须与你的 GitHub 仓库名一致，且前后都要有斜杠
  base: '/my-blog/', 

  // 站点基本信息
  title: "wsqept's Blog",
  description: "记录",

  themeConfig: {
    // 1. 网站左上角的 Logo (确保 public 文件夹里有 avatar.jpg)
    logo: '/avatar.jpg', 

    // 2. 顶部导航栏 (Nav)
    // 注意：你设置了 /posts/Script/，请确保目录结构对应
    nav: [
      { text: '首页', link: '/' },
      { text: 'Tech', link: '/posts/Tech/' }, 
      {
        text: 'Script',
        items: [
          { text: '一只鸟在等撞死它的玻璃', link: '/posts/script/一只鸟在等撞死它的玻璃' },
        ]
      },
      { text: 'Movie', link: '/posts/Movie/' }, 
      { text: 'Reading', link: '/posts/Reading/' },
      { 
        text: '关于我', 
        items: [
          { text: 'GitHub', link: 'https://github.com/wsqept' },
        ]
      }
    ],

    // 3. 侧边栏 (Sidebar)
    // 我根据你的 Nav 自动帮你补全了侧边栏配置，否则点击导航进去左边是空的
    sidebar: {
      '/posts/Script/': [
        {
          text: '一只鸟等着一面撞死它的玻璃',
          items: [
            // 这里的 link 对应你实际创建的 .md 文件
            // 例如: /posts/Script/my-story.md
            { text: '一只鸟等着一面撞死它的玻璃', link: '/posts/Script/一只鸟等着一面撞死它的玻璃' } 
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

    // 6. 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})