// 搜尋服務 composable
import { ref, computed } from 'vue'

// 匯入所有的資料
import { generalArticles } from '~/data/generalData'
import { contractArticles } from '~/data/contractData'
import { wageArticles } from '~/data/wageData'
import { workingHoursArticles } from '~/data/working-hoursData'
import { childFemaleLaborArticles } from '~/data/child-female-labor'
import { retirementArticles } from '~/data/retirementData'
import { occupationalHazardsArticles } from '~/data/occupational-hazards'
import { technicalApprentice } from '~/data/technical-apprentice'
import { ruleArticles } from '~/data/work-rules'
import { supervisionArticles } from '~/data/supervision'
import { penaltyArticles } from '~/data/penalty'
import { supplementaryArticles } from '~/data/supplementary'

// 定義法條介面
export interface LawArticle {
  number: string;
  title: string;
  content: string;
  contentExamples?: string[];
  content2?: string;
  content2Examples?: string[];
  content3?: string;
  content3Examples?: string[];
  content4?: string;
  content4Examples?: string[];
  content5?: string;
  content5Examples?: string[];
  content6?: string;
  content6Examples?: string[];
  content7?: string;
  content7Examples?: string[];
  content8?: string;
  content8Examples?: string[];
  content9?: string;
  content9Examples?: string[];
  content10?: string;
  content10Examples?: string[];
  content11?: string;
  content11Examples?: string[];
  content12?: string;
  content12Examples?: string[];
  content13?: string;
  content13Examples?: string[];
}

// 定義搜尋結果介面，包含來源章節資訊
export interface SearchResult extends LawArticle {
  chapter: string;      // 章節名稱
  chapterPath: string;  // 對應的路由路徑
  relevanceScore: number; // 相關性分數
}

// 章節對應表
const chapterMapping = {
  general: { name: '總則', path: '/labor-law/general', articles: generalArticles },
  contract: { name: '勞動契約', path: '/labor-law/contract', articles: contractArticles },
  wage: { name: '工資', path: '/labor-law/wage', articles: wageArticles },
  workingHours: { name: '工作時間休假', path: '/labor-law/working-hours', articles: workingHoursArticles },
  childFemale: { name: '童工女工', path: '/labor-law/child-female-labor', articles: childFemaleLaborArticles },
  retirement: { name: '退休', path: '/labor-law/retirement', articles: retirementArticles },
  occupationalHazard: { name: '職業災害補償', path: '/labor-law/occupational-hazards', articles: occupationalHazardsArticles },
  technicalApprentice: { name: '技術生', path: '/labor-law/technical-apprentice', articles: technicalApprentice },
  workRules: { name: '工作規則', path: '/labor-law/work-rules', articles: ruleArticles },
  supervision: { name: '監督與檢查', path: '/labor-law/supervision', articles: supervisionArticles },
  penalty: { name: '罰則', path: '/labor-law/penalty', articles: penaltyArticles },
  supplementary: { name: '附則', path: '/labor-law/supplementary', articles: supplementaryArticles }
}

export const useSearchService = () => {
  const searchResults = ref<SearchResult[]>([])
  const isSearching = ref(false)
  const hasSearched = ref(false)

  // 建立完整的法條資料庫
  const buildDatabase = (): SearchResult[] => {
    const database: SearchResult[] = []
    
    Object.entries(chapterMapping).forEach(([key, chapter]) => {
      if (chapter.articles && Array.isArray(chapter.articles)) {
        chapter.articles.forEach((article: LawArticle) => {
          database.push({
            ...article,
            chapter: chapter.name,
            chapterPath: chapter.path,
            relevanceScore: 0
          })
        })
      }
    })
    
    return database
  }

  // 計算相關性分數的函數
  const calculateRelevance = (article: LawArticle, query: string): number => {
    const normalizedQuery = query.toLowerCase().trim()
    let score = 0
    
    // 檢查條文編號（最高分）
    if (article.number.toLowerCase().includes(normalizedQuery)) {
      score += 100
    }
    
    // 檢查標題（高分）
    if (article.title.toLowerCase().includes(normalizedQuery)) {
      score += 80
    }
    
    // 檢查內容（中分）
    if (article.content.toLowerCase().includes(normalizedQuery)) {
      score += 50
    }
    
    // 檢查範例內容（低分）
    if (article.contentExamples) {
      const examplesText = article.contentExamples.join(' ').toLowerCase()
      if (examplesText.includes(normalizedQuery)) {
        score += 30
      }
    }
    
    // 檢查其他內容欄位
    const contentFields = ['content2', 'content3', 'content4', 'content5', 'content6', 'content7']
    contentFields.forEach(field => {
      const fieldValue = (article as any)[field]
      if (fieldValue && fieldValue.toLowerCase().includes(normalizedQuery)) {
        score += 40
      }
    })
    
    // 檢查其他範例欄位
    const exampleFields = ['content2Examples', 'content3Examples', 'content4Examples', 'content5Examples', 'content6Examples', 'content7Examples']
    exampleFields.forEach(field => {
      const fieldValue = (article as any)[field]
      if (fieldValue && Array.isArray(fieldValue)) {
        const examplesText = fieldValue.join(' ').toLowerCase()
        if (examplesText.includes(normalizedQuery)) {
          score += 25
        }
      }
    })
    
    return score
  }

  // 搜尋函數
  const search = async (query: string): Promise<SearchResult[]> => {
    if (!query.trim()) {
      searchResults.value = []
      hasSearched.value = false
      return []
    }

    isSearching.value = true
    hasSearched.value = true

    try {
      // 模擬搜尋延遲（可選）
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const database = buildDatabase()
      const results: SearchResult[] = []
      
      database.forEach(article => {
        const relevanceScore = calculateRelevance(article, query)
        if (relevanceScore > 0) {
          results.push({
            ...article,
            relevanceScore
          })
        }
      })
      
      // 依相關性分數排序
      results.sort((a, b) => b.relevanceScore - a.relevanceScore)
      
      // 限制結果數量（可選）
      const limitedResults = results.slice(0, 20)
      
      searchResults.value = limitedResults
      return limitedResults
      
    } finally {
      isSearching.value = false
    }
  }

  // 清除搜尋結果
  const clearSearch = () => {
    searchResults.value = []
    hasSearched.value = false
  }

  // 計算屬性：是否有搜尋結果
  const hasResults = computed(() => searchResults.value.length > 0)
  
  // 計算屬性：搜尋結果數量
  const resultCount = computed(() => searchResults.value.length)

  return {
    searchResults: readonly(searchResults),
    isSearching: readonly(isSearching),
    hasSearched: readonly(hasSearched),
    hasResults,
    resultCount,
    search,
    clearSearch
  }
}
