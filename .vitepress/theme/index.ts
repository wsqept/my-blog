// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'
import './style.css' // 确保这里有style.css
// 1. 引入刚才写的动画组件
import Intro from './components/Intro.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const { isDark, frontmatter } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      // 2. 把动画插到页面的最顶层 (layout-top)
      'layout-top': () => h(Intro),

      // 3. 原来的评论区逻辑保持不变
      'doc-after': () => {
        if (frontmatter.value.comments !== false) {
          return h(Giscus, {
            repo: "wsqept/my-blog", 
            repoId: "R_kgDOQd0wTg", // 记得把你的ID填回来！
            category: "Announcements",
            categoryId: "DIC_kwDOQd0wTs4CzG8H", // 记得把你的ID填回来！
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            theme: isDark.value ? 'transparent_dark' : 'light',
            lang: "zh-CN",
            loading: "lazy",
            key: route.path
          })
        }
      }
    })
  }
}