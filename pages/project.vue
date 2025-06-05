<template>
  <div class="labor-law-classroom">  
      <!-- 搜尋框 -->
    <div class="search-container">      <input 
        type="text" 
        placeholder="搜尋勞基法相關資訊..." 
        class="search-input input" 
        v-model="searchQuery" 
        @keypress="handleKeyPress"
      />
      <button class="search-button btn btn-primary" @click="performSearch" :disabled="isSearching">
        {{ isSearching ? '搜尋中...' : '搜尋' }}
      </button>
      <button 
        v-if="showSearchResults" 
        class="clear-button" 
        @click="handleClearSearch"
        title="清除搜尋"
      >
        ✕
      </button>
    </div>
      <!-- 搜尋結果區域 -->
    <div v-if="showSearchResults" class="search-results-container">
      <div class="search-results-header">
        <h3 v-if="hasResults" class="search-title">
          找到 {{ resultCount }} 筆相關結果
          <span class="search-query-highlight">"{{ searchQuery }}"</span>
        </h3>
        <h3 v-else-if="hasSearched && !isSearching" class="no-results-text">
          沒有找到相關結果
          <span class="search-query-highlight">"{{ searchQuery }}"</span>
        </h3>
      </div>
      
      <div v-if="hasResults" class="search-results">
        <div 
          v-for="result in searchResults" 
          :key="`${result.chapter}-${result.number}`"
          class="search-result-card"
        >
          <div class="result-header">
            <span class="result-chapter">{{ result.chapter }}</span>
            <span class="result-number">{{ result.number }}</span>
          </div>
          <h4 class="result-item-title">{{ result.title }}</h4>
          <p class="result-item-content">{{ result.content.substring(0, 200) }}{{ result.content.length > 200 ? '...' : '' }}</p>
          <div class="result-footer">
            <NuxtLink 
              :to="`${result.chapterPath}?article=${encodeURIComponent(result.number)}`" 
              class="result-link"
            >
              查看完整內容 →
            </NuxtLink>
            <span class="relevance-score">相關度: {{ result.relevanceScore }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 法條區塊 -->
    <div class="law-sections">      <!-- 總則 -->
      <div class="law-section-card card">
        <h2>總則</h2>
        <div class="law-content">
          <p class="article-number">第 1 條</p>
          <p1 class="article-text">為規定勞動條件最低標準，保障勞工權益，加強勞雇關係，促進社會與經濟發展，特制定本法；本法未規定者，適用其他法律之規定。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/general`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 勞動契約 -->
      <div class="law-section-card card">
        <h2>勞動契約</h2>
        <div class="law-content">
          <p class="article-number">第 9 條</p>
          <p1 class="article-text">勞動契約，分為定期契約及不定期契約。臨時性、短期性、季節性及特定性工作得為定期契約；有繼續性工作應為不定期契約。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/contract`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 工資 -->
      <div class="law-section-card card">
        <h2>工資</h2>
        <div class="law-content">
          <p class="article-number">第 21 條</p>
          <p1 class="article-text">工資由勞雇雙方議定之。但不得低於基本工資。前項基本工資，由中央主管機關設基本工資審議委員會擬訂後，報請行政院核定之。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/wage`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 工作時間休假 -->
      <div class="law-section-card card">
        <h2>工作時間休假</h2>
        <div class="law-content">
          <p class="article-number">第 30 條</p>
          <p1 class="article-text">勞工每日正常工作時間不得超過八小時，每週不得超過四十小時。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/working-hours`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 童工女工 -->
      <div class="law-section-card card">
        <h2>童工女工</h2>
        <div class="law-content">
          <p class="article-number">第 44 條</p>
          <p1 class="article-text">十五歲以上未滿十六歲之受僱從事工作者，為童工。童工不得從事危險性或有害性之工作。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/child-female-labor`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 退休 -->
      <div class="law-section-card card">
        <h2>退休</h2>
        <div class="law-content">
          <p class="article-number">第 53 條</p>
          <p1 class="article-text">勞工有下列情形之一者，得自請退休：一、工作十五年以上年滿五十五歲者。二、工作二十五年以上者。三、工作十年以上年滿六十歲者。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/retirement`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 職業災害補償 -->
      <div class="law-section-card card">
        <h2>職業災害補償</h2>
        <div class="law-content">
          <p class="article-number">第 59 條</p>
          <p1 class="article-text">勞工因遭遇職業災害而致死亡、殘廢、傷害或疾病時，雇主應依下列規定予以補償。但如同一事故，依勞工保險條例或其他法令規定，已由雇主支付費用補償者，雇主得予以抵充之。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/occupational-hazards`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 技術生 -->
      <div class="law-section-card card">
        <h2>技術生</h2>
        <div class="law-content">
          <p class="article-number">第 64 條</p>
          <p1 class="article-text">雇主不得招收未滿十五歲之人為技術生。但國民中學畢業者，不在此限。稱技術生者，指依中央主管機關規定之技術生訓練職類中以學習技能為目的而接受雇主訓練之人。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/technical-apprentice`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 工作規則 -->
      <div class="law-section-card card">
        <h2>工作規則</h2>
        <div class="law-content">
          <p class="article-number">第 70 條</p>
          <p1 class="article-text">雇主僱用勞工人數在三十人以上者，應依其事業性質，就下列事項訂立工作規則，報請主管機關核備後並公開揭示之。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/work-rules`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 監督檢查 -->
      <div class="law-section-card card">
        <h2>監督與檢查</h2>
        <div class="law-content">
          <p class="article-number">第 72 條</p>
          <p1 class="article-text">中央主管機關，為貫徹本法及其他勞工法令之執行，設勞工檢查機構或授權直轄市主管機關專設檢查機構辦理之；直轄市、縣（市）主管機關於必要時，亦得派員實施檢查。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/supervision`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 罰則 -->
      <div class="law-section-card card">
        <h2>罰則</h2>
        <div class="law-content">
          <p class="article-number">第 75 條</p>
          <p1 class="article-text">違反本法經主管機關處以罰鍰者，主管機關應公布其事業單位或事業主之名稱、負責人姓名、處分期日、違反條文及罰鍰金額，並限期令其改善。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/penalty`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 附則 -->
      <div class="law-section-card card">
        <h2>附則</h2>
        <div class="law-content">
          <p class="article-number">第 84-1 條</p>
          <p1 class="article-text">經中央主管機關指定之行業，雇主與勞工取得共識後，得適用彈性工時制度，不受第三十條、第三十二條、第三十六條、第三十七條、第四十九條規定之限制。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/supplementary`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
      
      <!-- 特殊區域：性騷擾防治區 -->
      <div class="law-section-card special-section card">
        <h2>性騷擾防治區</h2>
        <div class="law-content">
          <p class="article-number">性別工作平等法 第 12 條</p>
          <p1 class="article-text">雇主應防治工作場所性騷擾之發生。雇主知悉前條性騷擾之情形時，應採取立即有效之糾正及補救措施。</p1>
        </div>
        <div class="section-footer">
          <NuxtLink :to="`/labor-law/sexual-harassment-prevention`" class="learn-more-btn btn btn-secondary">
            Learn more...
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- 參考資料 -->
    <div class="reference-section">
      <h3>參考資料</h3>
      <p>本頁面內容參考自：</p>
      <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=N0030001" target="_blank" rel="noopener noreferrer" class="reference-link">
        法務部全國法規資料庫 - 勞動基準法
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSearchService } from '~/composables/useSearchService';

// 搜尋功能相關變數
const searchQuery = ref('');
const showSearchResults = ref(false);

// 使用搜尋服務
const { searchResults, isSearching, hasSearched, hasResults, resultCount, search, clearSearch } = useSearchService();

// 搜尋功能
const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    clearSearch();
    showSearchResults.value = false;
    return;
  }
  
  try {
    await search(searchQuery.value);
    showSearchResults.value = true;
    console.log('搜尋結果:', searchResults.value);
  } catch (error) {
    console.error('搜尋發生錯誤:', error);
  }
};

// 清除搜尋
const handleClearSearch = () => {
  searchQuery.value = '';
  clearSearch();
  showSearchResults.value = false;
};

// 當按下 Enter 鍵時執行搜尋
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    performSearch();
  }
};
</script>

<style scoped>
.labor-law-classroom {
  max-width: 95vw;
  margin: 0 auto;
  padding: 20px 20px;
}

h1 {
  /* 使用 typography.css 中的全局樣式，只覆寫需要的屬性 */
  font-size: var(--font-size-5xl); /* 覆寫為更大的尺寸 */
}

/* h2 和 p1 使用 typography.css 中的全局樣式 */

/* 搜尋框樣式 */
.search-container {
  margin: 30px auto 40px;
  max-width: 900px;
  display: flex;
  gap: 15px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border-radius: 15px;
  padding: 12px;
  background: var(--theme-card, white);
  transition: background 0.3s ease;
}

.search-input {
  flex: 1;
  /* 使用通用輸入框樣式 */
}

.search-button {
  /* 使用通用按鈕樣式 */
  background: var(--theme-accent, #3498db);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 18px 32px;
  cursor: pointer;
  font-size: var(--font-size-lg);
  transition: all 0.3s;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-semibold);
}

.search-button:hover {
  background-color: var(--theme-accent, #2980b9);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(41, 128, 185, 0.3);
}

.search-button:disabled {
  background-color: var(--theme-text-secondary, #bdc3c7);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.clear-button {
  background-color: var(--theme-accent, #64748b);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 18px 20px;
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  transition: all 0.3s;
  font-family: "LXGW WenKai Mono TC", monospace;
  min-width: 60px;
}

.clear-button:hover {
  background-color: var(--theme-accent, #475569);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(100, 116, 139, 0.3);
}

/* 搜尋結果樣式 */
.search-results-container {
  margin: 30px auto;
  max-width: 95vw;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
}

.search-results-header {
  background: var(--theme-header, linear-gradient(135deg, #3498db, #2980b9));
  color: white;
  padding: 20px 30px;
}

.search-results-header h3 {
  margin: 0;
  font-size: var(--font-size-xl);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
  color: var(--theme-text-light, #ffffff);
  line-height: var(--line-height-relaxed);
}

.search-query {
  color: var(--theme-accent, #f1c40f);
  font-weight: 700;
}

.search-results {
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
}

.search-result-card {
  background: var(--theme-card, #f8f9fa);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  border-left: 4px solid var(--theme-accent, #3498db);
  transition: all 0.3s ease;
  position: relative;
}

.search-result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left-color: var(--theme-accent, #2980b9);
  background: var(--theme-card, #ffffff);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.result-chapter {
  background: var(--theme-accent, #3498db);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: var(--font-size-sm);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
}

.result-number {
  color: var(--theme-accent, #3498db);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
  background: rgba(52, 152, 219, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
}

.result-title {
  color: var(--theme-text, #2c3e50);
  margin: 10px 0;
  font-size: var(--font-size-lg);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

.result-content {
  color: var(--theme-text-secondary, #555);
  line-height: var(--line-height-relaxed);
  margin: 15px 0;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-size: var(--font-size-base);
}

.result-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e9ecef;
}

.result-link {
  color: var(--theme-accent, #3498db);
  text-decoration: none;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.result-link:hover {
  color: var(--theme-text-light, white);
  background: var(--theme-accent, #3498db);
  transform: translateX(5px);
  border-color: var(--theme-accent, #3498db);
}

.relevance-score {
  color: var(--theme-text-secondary, #7f8c8d);
  font-size: var(--font-size-xs);
  font-family: "LXGW WenKai Mono TC", monospace;
}

/* 法條區塊樣式 */
.law-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
  row-gap: 80px;
  margin-top: 50px;
  justify-content: center;
  padding: 0 15px;
}

.law-section-card {
  /* 使用通用卡片樣式 */
  margin: 25px 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
  position: relative;
}

.law-content {
  flex-grow: 1;
  margin: 15px 0;
}

.article-number {
  font-weight: var(--font-weight-bold);
  color: var(--theme-accent, #3498db);
  margin-bottom: 10px;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-size: var(--font-size-2xl);
  transition: color 0.3s ease;
}

.article-text {
  color: var(--theme-text-secondary, #555);
  line-height: var(--line-height-relaxed);
  font-family: "LXGW WenKai Mono TC", monospace;
  margin-bottom: 12px;
  max-height: 110px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.section-footer {
  margin-top: 15px;
  text-align: right;
  margin-top: auto;
  padding-top: 15px;
}

.learn-more-btn {
  /* 使用通用次要按鈕樣式 */
  padding: 8px 15px;
  border-radius: 6px;
  font-size: var(--font-size-md);
}

/* 特殊區域樣式 */
.special-section {
  background-color: rgba(100, 116, 139, 0.05);
  border-left: 5px solid var(--theme-accent, #64748b);
  grid-column: 1 / -1;
  margin: 80px 15px 40px 15px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.special-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(90deg, rgba(100, 116, 139, 0) 0%, rgba(100, 116, 139, 0.08) 100%);
  z-index: 1;
  pointer-events: none;
}

.special-section h2 {
  color: var(--theme-accent, #64748b);
  font-weight: var(--font-weight-bold);
  border-bottom-color: rgba(100, 116, 139, 0.2);
  transition: color 0.3s ease, border-color 0.3s ease;
}

.special-section .article-text {
  color: var(--theme-text-secondary, #7a3232);
}

/* 參考資料樣式 */
.reference-section {
  margin-top: 80px;
  padding: 35px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid #6c757d;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
}

.reference-section h3 {
  color: var(--theme-text, #495057);
  margin-bottom: 15px;
  font-size: var(--font-size-xl);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
}

.reference-section p {
  color: var(--theme-text-secondary, #6c757d);
  margin-bottom: 15px;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-size: var(--font-size-md);
}

.reference-link {
  display: inline-block;
  color: var(--theme-accent, #007bff);
  text-decoration: none;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-md);
  padding: 12px 24px;
  background: var(--theme-card, white);
  border: 2px solid var(--theme-accent, #007bff);
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(59, 130, 246, 0.2);
}

.reference-link:hover {
  color: var(--theme-text-light, white);
  background: var(--theme-accent, #007bff);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .law-sections {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 10px;
  }
  
  .search-container {
    flex-direction: column;
    margin: 20px auto 30px;
    padding: 6px;
  }
  
  .search-button, .clear-button {
    width: 100%;
    padding: 12px 15px;
  }
  h1 {
    font-size: var(--font-size-3xl);
    margin-bottom: 1.5rem;
  }

  .law-section-card {
    padding: 25px;
    margin: 10px;
    min-height: 250px;
  }

  .search-results-container {
    margin: 20px 10px;
  }

  .search-results-header {
    padding: 15px 20px;
  }
  .search-results-header h3 {
    font-size: var(--font-size-lg);
  }

  .search-results {
    padding: 15px;
    max-height: 60vh;
  }

  .search-result-card {
    padding: 15px;
  }

  .result-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .result-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .relevance-score {
    align-self: flex-end;
  }

  .reference-section {
    margin-top: 40px;
    padding: 25px;
  }
    .reference-section h3 {
    font-size: var(--font-size-lg);
  }
  
  .reference-link {
    font-size: var(--font-size-base);
    padding: 10px 20px;
  }

  .special-section {
    margin: 30px 10px 15px 10px;
  }
}

@media (max-width: 480px) {
  .labor-law-classroom {
    padding: 15px 10px;
  }
  h1 {
    font-size: var(--font-size-2xl);
  }

  h2 {
    font-size: var(--font-size-xl);
  }

  .special-section::before {
    width: 50px;
  }
}
</style>