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
  // .vitepress/theme/index.ts 的 imports 区域需要保留

  // ★★★ 修复后的 enhanceApp 逻辑 ★★★
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = async () => {
        // 1. 等待 Vue 虚拟 DOM 更新完毕
        await nextTick()
        
        // 2. 增加一个小小的延时 (20ms)，确保浏览器已经把新页面“画”出来了
        setTimeout(() => {
          // 3. 同时尝试获取“文章容器”或“主页容器”
          // 这里的逻辑是：如果找不到 .VPContent，就找 .VPHome
          const content = document.querySelector('.VPContent') || document.querySelector('.VPHome')
          
          if (content) {
            // 先移除类名（重置状态）
            content.classList.remove('animate-fade-in')
            
            // 触发回流 (Reflow)，这是重启 CSS 动画的黑魔法
            void content.offsetWidth
            
            // 重新添加类名（开始播放）
            content.classList.add('animate-fade-in')
          }
        }, 20)
      }
    }
  }