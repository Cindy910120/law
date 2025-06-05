<template>
  <div class="color-demo-page">
    <div class="demo-container">
      <h1 class="demo-title">相近色調系統展示</h1>
      
      <!-- 色調展示區域 -->
      <section class="demo-section">
        <h2>主題色調變化</h2>
        <div class="tone-showcase">
          <div class="tone-sample lighter">淺</div>
          <div class="tone-sample light">較淺</div>
          <div class="tone-sample base">原</div>
          <div class="tone-sample dark">較深</div>
          <div class="tone-sample darker">深</div>
        </div>
      </section>

      <!-- 文字層次展示 -->
      <section class="demo-section">
        <h2>文字層次系統</h2>
        <div class="text-hierarchy">
          <h1 class="text-primary-tone">主標題 - 最深色調</h1>
          <h2 class="text-secondary-tone">副標題 - 次深色調</h2>
          <h3 class="text-tertiary-tone">小標題 - 中等色調</h3>
          <p class="text-quaternary-tone">段落文字 - 較淺色調</p>
          <small class="text-quinary-tone">輔助文字 - 最淺色調</small>
        </div>
      </section>

      <!-- 互動效果展示 -->
      <section class="demo-section">
        <h2>互動效果</h2>
        <div class="interactive-demo">
          <button class="btn btn-primary">主要按鈕</button>
          <button class="btn btn-secondary">次要按鈕</button>
          <a href="#" class="text-hover-accent">懸停變色連結</a>
          <span class="text-emphasis">強調文字</span>
          <div class="tag">標籤樣式</div>
        </div>
      </section>

      <!-- 狀態指示展示 */
      <section class="demo-section">
        <h2>狀態指示</h2>
        <div class="status-demo">
          <div class="status-active">活躍狀態</div>
          <div class="status-inactive">非活躍狀態</div>
          <div class="status-pending">處理中狀態</div>
        </div>
      </section>

      <!-- 特殊效果展示 */
      <section class="demo-section">
        <h2>特殊效果</h2>
        <div class="effects-demo">
          <div class="text-gradient">漸層文字效果</div>
          <div class="text-depth">立體文字效果</div>
          <div class="harmonious-text">和諧色彩文字塊</div>
          <div class="text-selected">選中狀態文字</div>
        </div>
      </section>

      <!-- 通知樣式展示 -->
      <section class="demo-section">
        <h2>通知樣式</h2>
        <div class="notification-demo">
          <div class="notification-text info">資訊通知 - 使用主題相近色</div>
          <div class="notification-text success">成功通知 - 綠色系統</div>
          <div class="notification-text warning">警告通知 - 橙色系統</div>
          <div class="notification-text error">錯誤通知 - 紅色系統</div>
        </div>
      </section>

      <!-- 模擬內容區域 -->
      <section class="demo-section">
        <h2>模擬內容區域</h2>
        <div class="card">
          <h3 class="card-title">卡片標題</h3>
          <p class="card-subtitle">卡片副標題</p>
          <p class="article-content-text">
            這是一段模擬的文章內容，展示在不同主題下，
            文字顏色如何與背景形成和諧的<strong>相近色調</strong>搭配。
            無論選擇哪個主題，文字都會呈現相近的色彩層次。
          </p>
          <div class="example-title-text">範例標題</div>
          <div class="example-content-text">這是範例內容，使用較淺的相近色調</div>
        </div>
      </section>

      <!-- 使用說明 -->
      <section class="demo-section">
        <h2>使用說明</h2>
        <div class="usage-info">
          <div class="quote-text">
            試著切換不同的主題色彩，觀察所有文字顏色如何自動調整為相近的色調，
            創造出和諧統一的視覺效果。
          </div>
          <p class="description-text">
            這個系統會根據主題的主色調自動生成5個層次的相近色，
            確保在任何主題下都能保持良好的視覺層次和可讀性。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 使用顏色主題系統
const { initializeTheme } = useColorTheme()

// 初始化主題
onMounted(() => {
  initializeTheme()
})

// 頁面標題
useHead({
  title: '相近色調系統展示 - 法規查詢系統'
})
</script>

<style scoped>
.color-demo-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--theme-card), var(--tone-lighter));
  padding: 2rem 0;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.demo-title {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--typography-primary);
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--theme-card);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(var(--tone-light-rgb, 203, 213, 225), 0.3);
}

.demo-section h2 {
  color: var(--typography-accent);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--tone-accent-light);
  padding-bottom: 0.5rem;
}

.text-hierarchy > * {
  margin-bottom: 1rem;
}

.interactive-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.status-demo {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.effects-demo > * {
  margin-bottom: 1rem;
}

.notification-demo > * {
  margin-bottom: 1rem;
}

.usage-info > * {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .demo-container {
    padding: 0 1rem;
  }
  
  .demo-section {
    padding: 1rem;
  }
  
  .interactive-demo {
    flex-direction: column;
    align-items: stretch;
  }
  
  .status-demo {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
