// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h, nextTick } from 'vue' // 引入 nextTick
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'
import './style.css'
import Intro from './components/Intro.vue'

export default {
  extends: DefaultTheme,

  // 1. 布局逻辑 (Intro + Giscus)
  Layout() {
    const { isDark, frontmatter } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Intro),
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
  },

  // 2. ★★★ 增强逻辑：处理路由转场动画 ★★★
  enhanceApp({ router }) {
    // 确保在浏览器环境下运行
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = async () => {
        // 等待 Vue 渲染完成
        await nextTick()
        
        // 找到 VitePress 的主内容容器
        const content = document.querySelector('.VPContent')
        
        if (content) {
          // 移除动画类（如果存在），为了重置状态
          content.classList.remove('animate-content')
          
          // 强制浏览器重绘 (Reflow)，这样才能重新触发动画
          void content.offsetWidth 
          
          // 添加动画类，开始播放
          content.classList.add('animate-content')
        }
      }
    }
  }
}