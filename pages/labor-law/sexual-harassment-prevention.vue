<template>
  <div class="sexual-harassment-prevention-page">
    <!-- 頁面標題 -->
    <div class="page-header">
      <h1 class="page-title">性騷擾防治區</h1>
      <p class="page-subtitle">了解性騷擾防治相關資訊與法規</p>
    </div>

    <!-- PDF資料區域 -->
    <div class="pdf-resources-section">
      <h2 class="section-title">性騷擾防治流程圖</h2>
      <p class="source-info">
        資料來源：
        <a 
          href="https://dosw.gov.taipei/News_Content.aspx?n=6D70E4D036D4FB9B&sms=586A860BE4697669&s=B3B09F28FC909743" 
          target="_blank" 
          class="source-link"
        >
          臺北市政府社會局
        </a>
      </p>
      
      <div class="pdf-grid">        <div class="pdf-card">
          <div class="pdf-icon">📄</div>
          <h3 class="pdf-title">性騷擾受理申訴流程圖</h3>
          <p class="pdf-description">了解性騷擾受理申訴、調查及處理程序的完整流程</p>
          <a 
            href="/PDF_Data/性騷擾受理申訴、調查及處理程序流程圖.pdf" 
            download="性騷擾受理申訴、調查及處理程序流程圖.pdf"
            class="pdf-download-btn btn btn-secondary"
          >
            <span>📥</span>
            申訴流程圖 PDF
          </a>
        </div>

        <div class="pdf-card">
          <div class="pdf-icon">📋</div>
          <h3 class="pdf-title">性騷擾事件受理申訴流程圖</h3>
          <p class="pdf-description">民眾版申訴流程圖，清楚說明申訴步驟與程序</p>
          <a 
            href="/PDF_Data/性騷擾事件受理申訴流程圖(民眾版).pdf" 
            download="性騷擾事件受理申訴流程圖(民眾版).pdf"
            class="pdf-download-btn btn btn-secondary"
          >
            <span>📥</span>
            民眾版流程圖 PDF
          </a>
        </div>

        <div class="pdf-card">
          <div class="pdf-icon">⚖️</div>
          <h3 class="pdf-title">性騷擾事件調解流程圖</h3>
          <p class="pdf-description">性騷擾事件調解程序與相關注意事項說明</p>
          <a 
            href="/PDF_Data/性騷擾事件調解流程圖.pdf" 
            download="性騷擾事件調解流程圖.pdf"
            class="pdf-download-btn btn btn-secondary"
          >
            <span>📥</span>
            調解流程圖 PDF
          </a>
        </div>
      </div>
    </div>    <!-- 主要按鈕區域 -->
    <div class="main-actions-section">
      <h2 class="section-title">詳細法規與指引</h2>
      <div class="action-buttons">
        <NuxtLink 
          to="/labor-law/gender-equality-work-law"
          class="action-btn btn btn-primary"
        >
          <span class="btn-icon">⚖️</span>
          <div class="btn-content">
            <h3>性別平等工作法中的性騷擾之防治</h3>
            <p>查看相關法條與規定</p>
          </div>
        </NuxtLink>        <NuxtLink 
          to="/labor-law/harassment-prevention-law"
          class="action-btn btn btn-primary"
        >
          <span class="btn-icon">🛡️</span>
          <div class="btn-content">
            <h3>性騷擾防治法</h3>
            <p>了解防治法規內容</p>
          </div>
        </NuxtLink>

        <NuxtLink 
          to="/labor-law/response-guide"
          class="action-btn btn btn-primary"
        >
          <span class="btn-icon">🆘</span>
          <div class="btn-content">
            <h3>如何應對</h3>
            <p>遇到問題時的處理方式</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 頁面不再需要響應式狀態，因為按鈕現在導向獨立頁面
</script>

<style scoped>
.sexual-harassment-prevention-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--font-family-base, 'Inter', sans-serif);
}

/* 頁面標題區域 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, 
    var(--theme-header, #3498db), 
    var(--theme-accent, #2980b9)
  );
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: var(--font-size-4xl, 2.25rem);
  font-weight: var(--font-weight-bold, 700);
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: var(--font-size-lg, 1.125rem);
  opacity: 0.9;
  margin: 0;
  font-weight: var(--font-weight-medium, 500);
}

/* 區塊標題 */
.section-title {
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--typography-primary, #1f2937);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--typography-accent, #3b82f6);
  border-radius: 2px;
}

/* PDF資料區域 */
.pdf-resources-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: var(--theme-card, white);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.source-info {
  text-align: center;
  margin-bottom: 2rem;
  font-size: var(--font-size-sm, 0.875rem);
  color: var(--typography-secondary, #6b7280);
}

.source-link {
  color: var(--typography-accent, #3b82f6);
  text-decoration: none;
  font-weight: var(--font-weight-medium, 500);
  transition: color 0.3s ease;
}

.source-link:hover {
  color: var(--tone-accent-dark, #1d4ed8);
  text-decoration: underline;
}

.pdf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.pdf-card {
  background: var(--theme-card, white);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.pdf-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(59, 130, 246, 0.1), 
    transparent
  );
  transition: left 0.5s;
}

.pdf-card:hover::before {
  left: 100%;
}

.pdf-card:hover {
  transform: translateY(-5px);
  border-color: var(--typography-accent, #3b82f6);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.pdf-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.pdf-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--typography-primary, #1f2937);
  margin-bottom: 1rem;
}

.pdf-description {
  font-size: var(--font-size-sm, 0.875rem);
  color: var(--typography-secondary, #6b7280);
  margin-bottom: 1.5rem;
  line-height: var(--line-height-relaxed, 1.625);
  flex-grow: 1;
}

.pdf-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--typography-primary, #1f2937);
  background: var(--theme-card, white);
  border: 2px solid var(--typography-accent, #3b82f6);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: var(--font-weight-medium, 500);
  margin-top: auto;
  min-height: 48px;
}

.pdf-download-btn:hover {
  background: var(--typography-accent, #3b82f6);
  color: var(--typography-light, white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.pdf-download-btn span {
  font-size: var(--font-size-lg, 1.125rem);
}

/* 主要按鈕區域 */
.main-actions-section {
  margin-bottom: 3rem;
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
}

.action-btn {
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, 
    var(--typography-accent, #3b82f6), 
    var(--tone-accent-dark, #1d4ed8)
  );
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  text-decoration: none;
  min-height: 140px;
}

.action-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, 
    var(--tone-accent-light, #60a5fa), 
    var(--typography-accent, #3b82f6)
  );
}

.btn-icon {
  font-size: 3rem;
  margin-right: 1.5rem;
  opacity: 0.9;
}

.btn-content h3 {
  font-size: var(--font-size-xl, 1.25rem);
  font-weight: var(--font-weight-semibold, 600);
  margin: 0 0 0.5rem 0;
  color: white;
}

.btn-content p {
  font-size: var(--font-size-sm, 0.875rem);
  margin: 0;
  opacity: 0.9;
  color: white;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .sexual-harassment-prevention-page {
    padding: 1rem;
  }
  
  .page-header {
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
  }
    .page-title {
    font-size: var(--font-size-3xl, 1.875rem);
  }
  
  .pdf-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .action-buttons {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .action-btn {
    padding: 1.5rem;
  }
    .btn-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: var(--font-size-2xl, 1.5rem);
  }
  
  .action-btn {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .btn-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>

