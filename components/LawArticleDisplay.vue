<template>
  <div class="law-details-page">
    <h1>{{ pageTitle }}</h1>
    
    <div class="law-content-container">      <!-- 左側法條列表 -->
      <div class="law-list">
        <h2 class="category-title">法條列表</h2>
        <ul>
          <li v-for="(article, index) in articles" :key="index" 
              @click="selectArticle(index)" 
              :class="{ 'active': selectedArticleIndex === index }"
              :data-article-number="article.number"
              class="law-list-item">
            {{ article.number }} - {{ article.title }}
          </li>
        </ul>
      </div>
      
      <!-- 右側法條內容與舉例 -->
      <div class="law-examples">
        <div v-if="selectedArticle">
          <div class="selected-article">
            <h3>{{ selectedArticle.number }}</h3>
            
            <!-- 動態顯示所有content段落，每個都有舉例按鈕 -->
            <div v-for="(contentKey, index) in getContentKeys(selectedArticle)" :key="contentKey" class="content-section">
              <p class="article-text">{{ selectedArticle[contentKey] }}</p>
              <button @click="toggleContentExample(contentKey)" 
                      class="example-toggle-btn">
                {{ showContentExample[contentKey] ? '隱藏說明' : '舉例說明' }}
              </button>
              
              <div v-if="showContentExample[contentKey]" class="content-example">
                <template v-if="getExamples(selectedArticle, contentKey) && getExamples(selectedArticle, contentKey)!.length > 0">
                  <div v-for="(example, exampleIndex) in getExamples(selectedArticle, contentKey)" 
                       :key="exampleIndex" 
                       :class="example.endsWith('：') ? 'example-title' : 'example'">
                    <h4 v-if="!example.endsWith('：')"></h4>
                    <p>{{ example }}</p>
                  </div>
                </template>
                <template v-else>
                  <div class="example">
                    <h4>相關說明</h4>
                    <p>此段落的具體應用請參考下方實務舉例。</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="empty-state">
          請從左側選擇一個法條查看詳細內容
        </div>
      </div>
    </div>
    
    <div class="back-button-container">
      <NuxtLink to="/project" class="back-button">返回勞基法小學堂</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

interface LawArticle {
  number: string;
  title: string;
  content: string;
  contentExamples?: string[];
  [key: string]: any; // 允許動態屬性如 content2, content3Examples 等
}

interface Props {
  pageTitle: string;
  articles: LawArticle[];
}

const props = defineProps<Props>();
const route = useRoute();

// 響應式狀態
const selectedArticleIndex = ref<number | null>(null);
const showContentExample = ref<{ [key: string]: boolean }>({});

// 計算屬性
const selectedArticle = computed(() => 
  selectedArticleIndex.value !== null ? props.articles[selectedArticleIndex.value] : null
);

// 根據 URL 參數初始化選中的法條
const initializeFromRoute = () => {
  const articleParam = route.query.article as string;
  if (articleParam) {
    // 根據法條編號找到對應的索引
    const articleIndex = props.articles.findIndex(article => 
      article.number === articleParam || 
      article.number.replace(/\s+/g, '') === articleParam.replace(/\s+/g, '')
    );
    
    if (articleIndex !== -1) {
      selectedArticleIndex.value = articleIndex;
      
      // 滾動到對應的法條
      nextTick(() => {
        const articleElement = document.querySelector(`[data-article-number="${articleParam}"]`);
        if (articleElement) {
          articleElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }
};

// 監聽路由變化
watch(() => route.query.article, () => {
  initializeFromRoute();
});

// 組件掛載時初始化
onMounted(() => {
  initializeFromRoute();
});

// 方法
const selectArticle = (index: number) => {
  selectedArticleIndex.value = index;
  // 重置所有例子的顯示狀態
  showContentExample.value = {};
};

const toggleContentExample = (contentKey: string) => {
  showContentExample.value[contentKey] = !showContentExample.value[contentKey];
};

const getContentKeys = (article: LawArticle): string[] => {
  const keys = [];
  
  // 添加主要content
  if (article.content) keys.push('content');
  
  // 添加其他content (content2, content3, ...)
  for (let i = 2; i <= 13; i++) {
    const key = `content${i}`;
    if (article[key]) keys.push(key);
  }
  
  return keys;
};

const getExamples = (article: LawArticle, contentKey: string): string[] | undefined => {
  if (contentKey === 'content') {
    return article.contentExamples;
  }
  
  const exampleKey = `${contentKey}Examples`;
  return article[exampleKey];
};
</script>

<style scoped>

.law-details-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Microsoft JhengHei', sans-serif;
  font-size: var(--font-size-xl);
}

.law-details-page h1 {
  color: var(--theme-text, #2c3e50);
  transition: color 0.3s ease;
}

.law-content-container {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.law-list {
  flex: 0 0 300px;
  background: var(--theme-card, #f8f9fa);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 600px;
  overflow-y: auto;
  transition: background 0.3s ease;
}

.law-list h2 {
  color: var(--theme-text, #2c3e50);
  margin-bottom: 20px;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  border-bottom: 2px solid var(--theme-accent, #3498db);
  padding-bottom: 10px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.law-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.law-list li {
  padding: 12px 15px;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  font-size: var(--font-size-lg);
  line-height: var(--line-height-normal);
  color: var(--theme-text, #2c3e50);
}

.law-list li:hover {
  background-color: rgba(59, 130, 246, 0.1);
  transform: translateX(5px);
  color: var(--theme-text, #2c3e50);
}

.law-list li.active {
  background: var(--theme-accent, #3498db);
  color: var(--theme-text-light, white);
  border-left-color: var(--theme-accent, #2980b9);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
}

.law-examples {
  flex: 1;
  background: var(--theme-card, white);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  transition: background 0.3s ease;
}

.selected-article h3 {
  color: var(--theme-text, #2c3e50);
  margin-bottom: 25px;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  border-bottom: 3px solid var(--theme-accent, #3498db);
  padding-bottom: 10px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.article-text {
  line-height: var(--line-height-relaxed);
  color: var(--theme-text, #2c3e50);
  margin-bottom: 15px;
  padding: 20px;
  background: var(--theme-card, #f8f9fa);
  border-left: 8px solid var(--tone-header-much-darker, var(--theme-footer, #1e3a8a));
  border-radius: 8px;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.empty-state {
  text-align: center;
  color: var(--theme-text-secondary, #7f8c8d);
  font-size: var(--font-size-lg);
  margin: 30px 0;
}

.back-button-container {
  text-align: center;
  margin: 30px 0;
}

.back-button {
  background: var(--theme-accent, #3498db);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  text-decoration: none;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  transition: background 0.3s;
  display: inline-block;
}

.back-button:hover {
  background: var(--theme-footer, #2980b9);
}

/* Content section樣式 */
.content-section {
  margin-bottom: 20px;
}

.content-section .article-text {
  margin-bottom: 10px;
  border-bottom: none;
}

.example-toggle-btn {
  background: var(--theme-accent, #3498db);
  color: var(--theme-text-light, white);
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  display: inline-block;
}

.example-toggle-btn:hover {
  background: var(--theme-footer, #2980b9);
}

.content-example {
  margin-top: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: var(--theme-card, #f0f8ff);
  border-radius: 8px;
  border-left: 4px solid var(--tone-header-light, var(--theme-accent, #60a5fa));
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.content-example .example {
  background-color: transparent;
  margin-bottom: 12px;
  padding: 0;
  border: none;
}

.content-example .example:last-child {
  margin-bottom: 0;
}

.content-example .example h4 {
  color: var(--theme-accent, #2ecc71);
  margin: 0 0 8px 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.content-example .example p {
  margin: 0 0 10px 0;
  line-height: var(--line-height-relaxed);
  color: var(--theme-text, #2c3e50);
  font-size: var(--font-size-md);
}

.content-example .example-title {
  background-color: transparent;
  margin: 15px 0 10px 0;
  padding: 0;
  border: none;
  font-weight: var(--font-weight-bold);
  color: var(--theme-text, #2c3e50);
}

.content-example .example-title:first-child {
  margin-top: 0;
}

.content-example .example-title p {
  margin: 0 0 8px 0;
  font-size: var(--font-size-md);
  color: var(--theme-text, #2c3e50);
  font-weight: var(--font-weight-bold);
}

/* 響應式設計 */
@media (max-width: 900px) {
  .law-content-container {
    flex-direction: column;
  }
  
  .law-list {
    max-width: 100%;
  }
}
</style>
