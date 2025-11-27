<!-- .vitepress/theme/components/Intro.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)

onMounted(() => {
  // 这里设置动画持续时间，例如 2000ms (2秒) 后消失
  setTimeout(() => {
    show.value = false
  }, 2000)
})
</script>

<template>
  <div class="intro-mask" :class="{ hidden: !show }">
    <div class="intro-content">
      <!-- 这里写你想显示的文字，比如你的名字 -->
      <span class="logo-text">wsqept</span>
      <p class="tagline">Loading...</p>
    </div>
  </div>
</template>

<style scoped>
/* 全屏遮罩 */
.intro-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* 背景色跟随系统主题 (自动适配日/夜模式) */
  background-color: var(--vp-c-bg); 
  z-index: 99999; /* 保证在最上层 */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.8s ease-in-out, visibility 0.8s;
}

/* 隐藏时的状态 */
.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none; /* 消失后鼠标可以点击下方的网页 */
}

/* 文字容器动画 */
.intro-content {
  text-align: center;
  animation: breathe 2s ease-in-out infinite;
}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 4px;
  /* 字体颜色跟随系统 */
  color: var(--vp-c-text-1);
  font-family: 'Courier New', Courier, monospace; /* 极简风格字体 */
}

.tagline {
  margin-top: 10px;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  opacity: 0.8;
}

/* 呼吸动画关键帧 */
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.7; }
}
</style>