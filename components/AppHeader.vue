<template>  <header class="navbar">
    <div class="header-container">
      <div class="site-title">
        <h1 class="nav-title">勞基法小學堂</h1>
      </div>
      <nav>
        <ul>
          <li><NuxtLink to="/" class="nav-link">首頁</NuxtLink></li>
          <li><NuxtLink to="/project" class="nav-link">總覽</NuxtLink></li>
        </ul>
      </nav>
      
      <!-- 調色盤按鈕 -->
      <div class="color-palette-container">
        <button @click="toggleColorPalette" class="color-palette-btn" title="選擇主題顏色">
          🎨
        </button>
        
        <!-- 調色盤下拉選單 -->
        <div v-if="isColorPaletteOpen" class="color-palette-dropdown">
          <div class="palette-header">
            <h3 class="palette-title">選擇主題顏色</h3>
            <button @click="toggleColorPalette" class="close-btn">✕</button>
          </div>
          <div class="color-grid">
            <div 
              v-for="(theme, index) in colorThemes" 
              :key="index"
              @click="selectTheme(theme)"
              class="color-option"
              :class="{ 'active': currentTheme.name === theme.name }"
              :title="theme.name"
            >
              <div class="color-preview">
                <div class="color-header" :style="{ background: theme.header }"></div>
                <div class="color-card" :style="{ background: theme.card }"></div>
                <div class="color-footer" :style="{ background: theme.footer }"></div>
              </div>
              <span class="theme-name">{{ theme.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useColorTheme } from '~/composables/useColorTheme'
import { onMounted, onUnmounted } from 'vue'

const { 
  currentTheme, 
  colorThemes, 
  isColorPaletteOpen, 
  toggleColorPalette, 
  selectTheme, 
  initializeTheme 
} = useColorTheme()

// 點擊外部關閉調色盤
const handleClickOutside = (event: MouseEvent) => {
  const colorPaletteContainer = document.querySelector('.color-palette-container')
  if (colorPaletteContainer && !colorPaletteContainer.contains(event.target as Node)) {
    if (isColorPaletteOpen.value) {
      toggleColorPalette()
    }
  }
}

onMounted(() => {
  initializeTheme()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  width: 100%;
  background: var(--theme-header, #ffffff);
  padding: 1.6rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: var(--font-family-base);
  transition: background 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 60%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

li {
  margin-left: 2rem;
  text-align: center;
}

@keyframes gradient {
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

/* 調色盤樣式 */
.color-palette-container {
  position: relative;
  margin-left: 1rem;
}

.color-palette-btn {
  background: rgba(255, 255, 255, 0.9);  border: 2px solid var(--theme-card, #e0e0e0);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: var(--font-size-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-palette-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: var(--theme-accent, #3498db);
}

.color-palette-dropdown {
  position: absolute;
  top: 60px;
  right: 0;
  background: var(--theme-card, white);
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  width: 400px;
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid var(--theme-card, #e0e0e0);
  animation: slideDown 0.3s ease-out;
  transform-origin: top right;
}

.palette-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--theme-card, #f0f0f0);
  background: var(--theme-header, #3498db);
  color: white;
  border-radius: 15px 15px 0 0;
}

.palette-header h3 {
  margin: 0;
  font-size: var(--font-size-lg);
  font-family: var(--font-family-base);
  color: var(--theme-text-light, #ffffff);
}

.close-btn {
  background: none;
  border: none;
  color: var(--theme-text-light, #ffffff);
  font-size: var(--font-size-lg);
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 25px;
}

.color-option {
  cursor: pointer;
  border-radius: 10px;
  padding: 12px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: var(--theme-card, #f8f9fa);
  animation: fadeInUp 0.2s ease-out;
}

.color-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--theme-card, #e0e0e0);
}

.color-option.active {
  border-color: var(--theme-accent, #3498db);
  background: var(--theme-card, #e8f4fd);
}

.color-preview {
  display: flex;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-header {
  flex: 1;
  transition: all 0.3s ease;
}

.color-card {
  flex: 1.5;
  transition: all 0.3s ease;
}

.color-footer {
  flex: 1;
  transition: all 0.3s ease;
}

.theme-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-text, #2c3e50);
  font-family: var(--font-family-base);
  text-align: center;
  display: block;
  transition: color 0.3s ease;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .color-palette-dropdown {
    width: 300px;
    right: -50px;
  }
  
  .color-grid {
    grid-template-columns: 1fr;
  }
  
  nav {
    max-width: 50%;
  }
  
  .header-container {
    padding: 0 0.5rem;
  }
    .site-title h1 {
    font-size: var(--font-size-2xl);
  }
  
  a {
    font-size: var(--font-size-md);
    padding: 0.5rem;
  }
  
  li {
    margin-left: 1rem;
  }
}

/* 調色盤動畫 */
.color-palette-dropdown {
  animation: slideDown 0.3s ease-out;
  transform-origin: top right;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.color-option {
  animation: fadeInUp 0.2s ease-out;
}

.color-option:nth-child(1) { animation-delay: 0s; }
.color-option:nth-child(2) { animation-delay: 0.05s; }
.color-option:nth-child(3) { animation-delay: 0.1s; }
.color-option:nth-child(4) { animation-delay: 0.15s; }
.color-option:nth-child(5) { animation-delay: 0.2s; }
.color-option:nth-child(6) { animation-delay: 0.25s; }
.color-option:nth-child(7) { animation-delay: 0.3s; }
.color-option:nth-child(8) { animation-delay: 0.35s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.color-preview:hover .color-header,
.color-preview:hover .color-card,
.color-preview:hover .color-footer {
  transform: scale(1.05);
}
</style>