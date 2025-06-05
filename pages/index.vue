<template>
  <div class="home-page">
    <!-- 動態主題背景渲染 -->
    <div class="background-animation">
      <div class="dynamic-gradient-bg"></div>
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
      <div class="bg-circle circle-4"></div>
      <div class="floating-particles"></div>
    </div>
      <!-- 內容區域 -->
    <div class="hero-section">
      <h1>勞基法小學堂</h1>
      <p class="description-text">學習勞動基準法，保護您的權益</p>
      <p class="description-text">我們明明都要工作，為什麼會不理解勞基法</p>
      <NuxtLink to="/project" class="cta-button btn-text-lg">
        開始學習
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorTheme } from '~/composables/useColorTheme'
import { onMounted, computed, watch } from 'vue'

const { initializeTheme, currentTheme } = useColorTheme()

// 計算動態背景漸層
const dynamicGradient = computed(() => {
  const theme = currentTheme.value
  if (!theme) return ''
  
  // 基於主題色創建多層次漸層
  return `
    linear-gradient(
      135deg,
      ${theme.header}15 0%,
      ${theme.accent}20 25%,
      ${theme.footer}25 50%,
      ${theme.header}30 75%,
      ${theme.accent}15 100%
    ),
    radial-gradient(
      ellipse at top left,
      ${theme.accent}25 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at bottom right,
      ${theme.header}20 0%,
      transparent 50%
    )
  `
})

// 動態更新CSS變量
watch(currentTheme, (newTheme) => {
  if (newTheme && process.client) {
    const root = document.documentElement
    root.style.setProperty('--dynamic-bg-gradient', dynamicGradient.value)
    root.style.setProperty('--theme-primary-alpha', `${newTheme.header}40`)
    root.style.setProperty('--theme-accent-alpha', `${newTheme.accent}30`)
    root.style.setProperty('--theme-footer-alpha', `${newTheme.footer}20`)
  }
}, { immediate: true })

onMounted(() => {
  initializeTheme()
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* 使用動態主題背景 */
  background: var(--dynamic-bg-gradient, linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%));
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  color: var(--theme-text-light, white);
  text-align: center;
  transition: background 0.5s ease;
}

/* 動態背景漸層 */
.dynamic-gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dynamic-bg-gradient);
  background-size: 400% 400%;
  animation: gradientFlow 25s ease infinite;
  opacity: 0.8;
  z-index: 0;
}

/* 背景漸層動畫 - 更複雜的移動模式 */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  25% {
    background-position: 100% 50%;
    filter: hue-rotate(10deg);
  }
  50% {
    background-position: 100% 100%;
    filter: hue-rotate(20deg);
  }
  75% {
    background-position: 0% 100%;
    filter: hue-rotate(10deg);
  }
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 0%;
    transform: scale(1) rotate(0deg);
  }
  33% {
    background-position: 100% 50%;
    transform: scale(1.1) rotate(120deg);
  }
  66% {
    background-position: 50% 100%;
    transform: scale(0.9) rotate(240deg);
  }
  100% {
    background-position: 0% 0%;
    transform: scale(1) rotate(360deg);
  }
}

/* 動態背景圓圈 - 基於主題色 */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, 
    var(--theme-primary-alpha, rgba(255, 255, 255, 0.1)) 0%, 
    var(--theme-accent-alpha, rgba(255, 255, 255, 0.05)) 50%, 
    transparent 100%);
  animation: float 20s ease-in-out infinite;
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
  background: radial-gradient(circle,
    var(--theme-primary-alpha, rgba(37, 99, 235, 0.15)) 0%,
    var(--theme-accent-alpha, rgba(96, 165, 250, 0.1)) 50%,
    transparent 100%);
}

.circle-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 15%;
  animation-delay: -8s;
  animation-duration: 20s;
  background: radial-gradient(circle,
    var(--theme-accent-alpha, rgba(96, 165, 250, 0.12)) 0%,
    var(--theme-footer-alpha, rgba(30, 58, 138, 0.08)) 50%,
    transparent 100%);
}

.circle-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
  animation-delay: -15s;
  animation-duration: 30s;
  background: radial-gradient(circle,
    var(--theme-footer-alpha, rgba(30, 58, 138, 0.1)) 0%,
    var(--theme-primary-alpha, rgba(37, 99, 235, 0.06)) 50%,
    transparent 100%);
}

.circle-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: -5s;
  animation-duration: 18s;
  background: radial-gradient(circle,
    var(--theme-accent-alpha, rgba(96, 165, 250, 0.08)) 0%,
    transparent 100%);
}

/* 浮動粒子效果 */
.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--theme-accent-alpha, rgba(255, 255, 255, 0.3)), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--theme-primary-alpha, rgba(255, 255, 255, 0.2)), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--theme-footer-alpha, rgba(255, 255, 255, 0.4)), transparent),
    radial-gradient(1px 1px at 130px 80px, var(--theme-accent-alpha, rgba(255, 255, 255, 0.3)), transparent),
    radial-gradient(2px 2px at 160px 30px, var(--theme-primary-alpha, rgba(255, 255, 255, 0.2)), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: particlesFloat 50s linear infinite;
  opacity: 0.6;
}

@keyframes particlesFloat {
  0% {
    transform: translateY(0px) translateX(0px);
  }
  100% {
    transform: translateY(-100px) translateX(50px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-20px) translateX(10px) scale(1.1) rotate(90deg);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-40px) translateX(-15px) scale(0.9) rotate(180deg);
    opacity: 0.5;
  }
  75% {
    transform: translateY(-10px) translateX(20px) scale(1.05) rotate(270deg);
    opacity: 0.8;
  }
}

.hero-section {
  max-width: 600px;
  padding: 2rem;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.hero-section h1 {
  font-size: var(--font-size-5xl);
  margin-bottom: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--theme-text-light, white);
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.3),
    0 0 20px var(--theme-accent-alpha, rgba(255, 255, 255, 0.3));
  animation: titleGlow 3s ease-in-out infinite alternate;
  transition: color 0.3s ease;
}

@keyframes titleGlow {
  from {
    text-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px var(--theme-accent-alpha, rgba(255, 255, 255, 0.3));
  }
  to {
    text-shadow: 
      2px 2px 20px rgba(255, 255, 255, 0.5), 
      2px 2px 4px rgba(0, 0, 0, 0.3),
      0 0 40px var(--theme-primary-alpha, rgba(255, 255, 255, 0.5));
  }
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: var(--theme-text-light, white);
  text-decoration: none;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, 
    var(--theme-accent-alpha, rgba(255, 255, 255, 0.3)), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  background: var(--theme-accent-alpha, rgba(255, 255, 255, 0.3));
  transform: translateY(-5px) scale(1.05);
  box-shadow: 
    0 15px 30px rgba(0, 0, 0, 0.2),
    0 0 20px var(--theme-primary-alpha, rgba(255, 255, 255, 0.4));
  border-color: var(--theme-accent, rgba(255, 255, 255, 0.5));
  color: var(--theme-text-light, white);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: var(--font-size-3xl);
  }
  
  .hero-section {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .cta-button {
    padding: 0.875rem 1.5rem;
  }
  
  .bg-circle {
    opacity: 0.5;
  }
  
  .floating-particles {
    opacity: 0.3;
  }
}

/* 主題切換動畫 */
.home-page,
.bg-circle,
.floating-particles,
.hero-section h1 {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
