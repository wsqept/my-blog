// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h, watch, nextTick } from 'vue'
import Giscus from '@giscus/vue'
import { useRoute, useData } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        // 判断逻辑：
        // 1. 如果页面在 frontmatter 里写了 comments: false，则不显示
        // 2. 否则默认显示
        if (frontmatter.value.comments !== false) {
          return h(Giscus, {
            repo: "wsqept/my-blog", // 记得替换你的信息
            repoId: "R_kgDOQd0wTg",
            category: "Announcements",
            categoryId: "DIC_kwDOQd0wTs4CzG8H",
            mapping: "pathname", // ★★★ 核心：保持这行为 pathname
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            theme: "light",
            lang: "zh-CN",
            loading: "lazy",
            // 让 Giscus 在切换页面时自动重新加载
            key: route.path 
          })
        }
      }
    })
  }
}