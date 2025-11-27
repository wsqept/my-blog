// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'
import './style.css' // 确保你还保留着引入css的这行（如果有的话）

export default {
  extends: DefaultTheme,
  Layout() {
    // 1. 获取当前是否为深色模式的状态 (isDark 是一个响应式变量)
    const { isDark, frontmatter } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        // 判断文章是否允许评论
        if (frontmatter.value.comments !== false) {
          return h(Giscus, {
            repo: "wsqept/my-blog", // 替换你的信息
            repoId: "R_kgDOQd0wTg",
            category: "Announcements",
            categoryId: "DIC_kwDOQd0wTs4CzG8H",
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            
            // 2. ★★★ 核心代码 ★★★
            // 如果 isDark 为真，就用透明深色；否则用浅色
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