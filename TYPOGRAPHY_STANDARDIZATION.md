# 字體大小標準化完成報告

## 概述
已完成整個網站的字體大小標準化工作，建立了統一的字體規格系統並應用到所有組件。

## 字體規格系統

### 字體大小標準 (9個級別)
- `--font-size-xs`: 0.75rem (12px) - 極小文字
- `--font-size-sm`: 0.875rem (14px) - 小文字
- `--font-size-base`: 1rem (16px) - 基本文字
- `--font-size-md`: 1.125rem (18px) - 中等文字
- `--font-size-lg`: 1.25rem (20px) - 大文字
- `--font-size-xl`: 1.5rem (24px) - 超大文字
- `--font-size-2xl`: 1.875rem (30px) - h3 標題
- `--font-size-3xl`: 2.25rem (36px) - h2 標題
- `--font-size-4xl`: 3rem (48px) - h1 標題
- `--font-size-5xl`: 4rem (64px) - 超大標題

### 行高標準 (3個級別)
- `--line-height-tight`: 1.25
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.75

### 字重標準 (4個級別)
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

## 語義化類別系統

### 通用組件類別
- `.btn` - 按鈕基本樣式
- `.btn-primary` - 主要按鈕
- `.btn-secondary` - 次要按鈕
- `.card` - 卡片樣式
- `.input` - 輸入框樣式

### Header 相關類別
- `.nav-title` - 導航標題
- `.nav-link` - 導航連結
- `.palette-title` - 調色盤標題
- `.theme-name` - 主題名稱

### Footer 相關類別
- `.footer-title` - Footer 標題
- `.footer-text` - Footer 內容文字
- `.footer-link` - Footer 連結
- `.footer-copyright` - 版權文字

### 內容類別
- `.card-title` - 卡片標題
- `.card-subtitle` - 卡片副標題
- `.description-text` - 描述文字
- `.btn-text-lg` - 大按鈕文字

### 搜尋相關類別
- `.search-title` - 搜尋標題
- `.search-query-highlight` - 搜尋查詢高亮
- `.no-results-text` - 無結果文字
- `.result-item-title` - 結果項目標題
- `.result-item-content` - 結果項目內容

### 法條相關類別
- `.category-title` - 分類標題
- `.law-list-item` - 法條列表項目
- `.article-content-text` - 文章內容文字
- `.example-title-text` - 範例標題
- `.example-content-text` - 範例內容
- `.empty-state-text` - 空狀態文字

## 響應式設計
- 手機版 (≤768px): 字體大小自動縮小
- 小手機版 (≤480px): 進一步縮小字體

## 已更新的文件

### 核心文件
1. **typography.css** - 完整的字體規格系統和語義化類別
2. **nuxt.config.ts** - 引入 CSS 文件

### 組件文件
1. **AppHeader.vue** - 使用語義化類別，移除重複樣式
2. **AppFooter.vue** - 使用語義化類別，移除重複樣式
3. **LawArticleDisplay.vue** - 標準化字體大小，使用語義化類別

### 頁面文件
1. **index.vue** - 完全標準化，使用語義化類別
2. **project.vue** - 完全標準化，使用語義化類別

## 優勢

### 1. 一致性
- 所有文字元素使用統一的字體大小標準
- 消除了字體大小的不一致性

### 2. 可維護性
- 集中管理字體規格
- 語義化類別讓代碼更易讀和維護
- 減少重複的樣式定義

### 3. 響應式
- 自動適配不同設備螢幕大小
- 統一的響應式斷點

### 4. 擴展性
- 容易添加新的字體大小級別
- 語義化類別方便組件重用

### 5. 開發效率
- 開發者可以快速選擇合適的字體大小
- 減少樣式衝突和覆蓋問題

## 使用指南

### 選擇字體大小
```vue
<!-- 使用 CSS 變量 -->
<style>
.my-text {
  font-size: var(--font-size-lg);
}
</style>

<!-- 使用語義化類別 -->
<template>
  <h3 class="card-title">標題</h3>
  <p class="description-text">描述</p>
  <button class="btn btn-primary btn-text-lg">按鈕</button>
</template>
```

### 自定義字體大小
如需新的字體大小，請在 `typography.css` 中添加新的 CSS 變量和對應的語義化類別。

## 字體顏色主題化系統

### 核心顏色變量
```css
--typography-primary      /* 主要文字顏色，跟隨主題 */
--typography-secondary    /* 次要文字顏色，較淡 */
--typography-accent       /* 強調色，用於連結、按鈕等 */
--typography-light        /* 淺色文字，用於深色背景 */
--typography-muted        /* 靜音色，用於輔助資訊 */
--typography-success      /* 成功狀態 #059669 */
--typography-warning      /* 警告狀態 #d97706 */
--typography-error        /* 錯誤狀態 #dc2626 */
```

### 主題適配類別
```css
.text-primary           /* 主要文字顏色 */
.text-secondary         /* 次要文字顏色 */
.text-accent           /* 強調文字顏色 */
.text-light            /* 淺色文字 */
.text-muted            /* 靜音文字 */
.text-success          /* 成功狀態文字 */
.text-warning          /* 警告狀態文字 */
.text-error            /* 錯誤狀態文字 */
```

### 互動效果類別
```css
.text-hover-accent      /* 滑鼠懸停變成強調色 */
.text-hover-primary     /* 滑鼠懸停變成主要色 */
.text-gradient          /* 漸層文字效果 */
.text-emphasis          /* 強調文字帶背景 */
```

### 特殊文字樣式
```css
.highlight-text         /* 搜尋高亮文字 */
.quote-text            /* 引用文字樣式 */
.code-text             /* 程式碼文字 */
.loading-text          /* 載入動畫文字 */
.search-highlight      /* 搜尋結果高亮 */
.stat-number           /* 統計數字 */
.stat-label            /* 統計標籤 */
.timestamp-text        /* 時間戳記 */
.version-text          /* 版本號 */
```

### 通知樣式
```css
.notification-text.info     /* 資訊通知 */
.notification-text.success  /* 成功通知 */
.notification-text.warning  /* 警告通知 */
.notification-text.error    /* 錯誤通知 */
```

### 導航相關
```css
.breadcrumb-text       /* 麵包屑文字 */
.breadcrumb-link       /* 麵包屑連結 */
.breadcrumb-separator  /* 麵包屑分隔符 */
```

### 動畫效果
```css
.typewriter           /* 打字機效果 */
.loading-text         /* 載入點點動畫 */
```

### 文字陰影和效果
```css
.text-shadow-light    /* 輕微陰影 */
.text-shadow-medium   /* 中等陰影 */
.text-shadow-strong   /* 強烈陰影 */
```

### 標籤和狀態
```css
.tag                  /* 標籤樣式 */
.status-success       /* 成功狀態 */
.status-warning       /* 警告狀態 */
.status-error         /* 錯誤狀態 */
```

### 響應式文字控制
```css
.hide-mobile          /* 手機版隱藏 */
.hide-desktop         /* 桌面版隱藏 */
.text-mobile-center   /* 手機版置中 */
.text-mobile-sm       /* 手機版小字 */
```

## 主題系統整合

### 自動顏色適配
- 所有字體顏色都會根據選擇的主題自動調整
- 包含15個預設主題配色方案
- 支援動態RGB值計算，用於半透明效果
- 自動計算對比色確保可讀性

### 平滑過渡效果
- 所有顏色變化都包含 `transition: color 0.3s ease`
- 主題切換時文字顏色平滑過渡
- 互動效果（hover, focus）都有適當的動畫

### 無障礙支援
- 自動計算文字與背景的對比度
- 提供 `.sr-only` 類別供螢幕閱讀器使用
- 統一的焦點樣式 `outline: 2px solid var(--typography-accent)`

## 相近色調智能系統

### 自動色調生成
系統會根據主題的主色調自動生成5個層次的相近色：
- `--tone-lighter`: 最淺 (+40% 亮度)
- `--tone-light`: 較淺 (+20% 亮度)  
- `--tone-base`: 原色 (0% 變化)
- `--tone-dark`: 較深 (-20% 亮度)
- `--tone-darker`: 最深 (-40% 亮度)

### 智能文字顏色適配
根據背景亮度自動選擇最佳的文字顏色：
- **深色背景** → 使用較亮的相近色調
- **淺色背景** → 使用較深的相近色調

### 互動狀態顏色
```css
--typography-primary-hover    /* 懸停時的主要文字色 */
--typography-accent-hover     /* 懸停時的強調色 */
--typography-selected         /* 選中狀態顏色 */
--typography-selected-bg      /* 選中背景色 */
```

### 使用範例

#### 基本色調類別
```vue
<template>
  <!-- 層次感文字 -->
  <h1 class="text-primary-tone">最深層文字</h1>
  <h2 class="text-secondary-tone">次深層文字</h2>
  <h3 class="text-tertiary-tone">中等文字</h3>
  <p class="text-quaternary-tone">較淺文字</p>
  <small class="text-quinary-tone">最淺文字</small>
  
  <!-- 狀態指示 -->
  <span class="status-active">活躍狀態</span>
  <span class="status-inactive">非活躍</span>
  <span class="status-pending">處理中</span>
  
  <!-- 特殊效果 -->
  <div class="text-depth">立體文字效果</div>
  <div class="harmonious-text">和諧色彩文字</div>
  <div class="text-selected">選中狀態</div>
</template>
```

#### 色調展示工具
```vue
<template>
  <!-- 顯示當前主題的色調變化 -->
  <div class="tone-showcase">
    <div class="tone-sample lighter">淺</div>
    <div class="tone-sample light">較淺</div>
    <div class="tone-sample base">原</div>
    <div class="tone-sample dark">較深</div>
    <div class="tone-sample darker">深</div>
  </div>
</template>
```

### 互動增強效果
所有互動元素都採用相近色調的變化：
- **按鈕**: 懸停時變成較深的相近色
- **連結**: 使用較淺的強調色，懸停時加深
- **輸入框**: 焦點時背景變成極淺的相近色
- **標籤**: 懸停時變成淺色背景配深色文字
- **法條項目**: 懸停時使用淺色背景和深色文字

### 視覺和諧原則
1. **同色系漸層**: 確保所有文字顏色都在同一色系範圍內
2. **適當對比度**: 自動計算確保文字可讀性
3. **平滑過渡**: 所有顏色變化都有0.3s的過渡動畫
4. **層次分明**: 用不同深淺表現內容的重要程度
5. **互動反饋**: 清晰的懸停和選中狀態視覺回饋

這個系統確保無論選擇哪個主題，所有文字顏色都會呈現和諧統一的視覺效果，就像您要求的「背景是深藍，字就是淺藍」的效果。

## 最終總結

字體大小標準化和顏色主題化系統已全面完成：

### ✅ 完成項目
1. **字體大小標準化** - 9個統一的字體大小級別
2. **語義化類別系統** - 60+ 個專用CSS類別
3. **顏色主題化** - 完整的顏色變量系統
4. **響應式設計** - 自動適配各種設備
5. **動畫效果** - 平滑的過渡和互動效果
6. **無障礙支援** - 對比度和焦點樣式優化
7. **組件重構** - 所有組件使用標準化系統

### 🎯 效益
- **一致性**: 統一的視覺呈現
- **可維護性**: 集中管理字體規格
- **擴展性**: 易於添加新功能
- **用戶體驗**: 平滑的主題切換
- **開發效率**: 語義化類別提升開發速度

### 📝 使用建議
1. 優先使用語義化類別而非直接CSS變量
2. 新組件開發時參考既有的類別命名規範
3. 需要新樣式時先評估是否可重用現有類別
4. 保持主題適配的理念，避免硬編碼顏色值

系統現已準備就緒，支援完整的主題切換和字體標準化功能！
