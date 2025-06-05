<template>
  <div class="home-page">
    <!-- 動態背景渲染 -->
    <div class="background-animation">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
      <div class="bg-circle circle-4"></div>
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
import { onMounted } from 'vue'

const { initializeTheme } = useColorTheme()

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
  background: var(--theme-header, linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%));
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: var(--theme-text-light, white);
  text-align: center;
}

/* 背景漸層動畫 */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 動態背景圓圈 */
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
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
  animation: float 20s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 15%;
  animation-delay: -8s;
  animation-duration: 20s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
  animation-delay: -15s;
  animation-duration: 30s;
}

.circle-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: -5s;
  animation-duration: 18s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-20px) translateX(10px) scale(1.1);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-40px) translateX(-15px) scale(0.9);
    opacity: 0.5;
  }
  75% {
    transform: translateY(-10px) translateX(20px) scale(1.05);
    opacity: 0.8;
  }
}

.hero-section {
  max-width: 600px;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.hero-section h1 {
  font-size: var(--font-size-5xl);
  margin-bottom: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--theme-text-light, white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
  transition: color 0.3s ease;
}

@keyframes titleGlow {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  to {
    text-shadow: 2px 2px 20px rgba(255, 255, 255, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.3);
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
}

.cta-button:hover {
  background: var(--theme-accent, rgba(255, 255, 255, 0.3));
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
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
}
</style>
