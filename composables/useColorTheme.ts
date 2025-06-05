import { ref, watch, readonly } from 'vue'

// 預定義的顏色主題 - 基於相近色調系統優化，所有顏色保持在同一色系內
export const colorThemes = [
  {
    name: '經典藍韻',
    header: '#2563eb',
    footer: '#1e3a8a',
    card: '#f0f9ff',
    accent: '#60a5fa', // 改為淺藍色，保持藍色系
    text: '#1e3a8a',
    textLight: '#ffffff',
    textSecondary: '#64748b'
  },
  {
    name: '薄荷清新',
    header: '#059669',
    footer: '#047857',
    card: '#f0fdf4',
    accent: '#34d399', // 改為淺綠色，保持綠色系
    text: '#064e3b',
    textLight: '#ffffff',
    textSecondary: '#4b5563'
  },
  {
    name: '優雅紫調',
    header: '#7c3aed',
    footer: '#5b21b6',
    card: '#faf5ff',
    accent: '#a78bfa', // 改為淺紫色，保持紫色系
    text: '#581c87',
    textLight: '#ffffff',
    textSecondary: '#6b7280'
  },
  {
    name: '日落橙黃',
    header: '#ea580c',
    footer: '#c2410c',
    card: '#fff7ed',
    accent: '#fb923c', // 改為淺橙色，保持橙色系
    text: '#9a3412',
    textLight: '#ffffff',
    textSecondary: '#78716c'
  },
  {
    name: '玫瑰粉紅',
    header: '#e11d48',
    footer: '#be185d',
    card: '#fdf2f8',
    accent: '#fb7185', // 改為淺粉色，保持粉色系
    text: '#9f1239',
    textLight: '#ffffff',
    textSecondary: '#71717a'
  },
  {
    name: '深邃海藍',
    header: '#0f172a',
    footer: '#020617',
    card: '#f8fafc',
    accent: '#1e40af', // 改為深藍色，保持藍色系
    text: '#1e293b',
    textLight: '#ffffff',
    textSecondary: '#64748b'
  },
  {
    name: '森林翠綠',
    header: '#16a34a',
    footer: '#15803d',
    card: '#f7fef0',
    accent: '#4ade80', // 改為淺綠色，保持綠色系
    text: '#14532d',
    textLight: '#ffffff',
    textSecondary: '#52525b'
  },
  {
    name: '琥珀金輝',
    header: '#d97706',
    footer: '#b45309',
    card: '#fffbeb',
    accent: '#fbbf24', // 改為淺金色，保持金色系
    text: '#92400e',
    textLight: '#ffffff',
    textSecondary: '#78716c'
  },
  {
    name: '櫻花浪漫',
    header: '#ec4899',
    footer: '#be185d',
    card: '#fdf2f8',
    accent: '#f472b6', // 改為淺粉色，保持粉色系
    text: '#9d174d',
    textLight: '#ffffff',
    textSecondary: '#71717a'
  },
  {
    name: '靛藍夜空',
    header: '#4338ca',
    footer: '#3730a3',
    card: '#eef2ff',
    accent: '#818cf8', // 改為淺靛藍色，保持靛藍色系
    text: '#312e81',
    textLight: '#ffffff',
    textSecondary: '#6366f1'
  },
  {
    name: '石墨灰調',
    header: '#475569',
    footer: '#334155',
    card: '#f8fafc',
    accent: '#94a3b8', // 改為淺灰色，保持灰色系
    text: '#1e293b',
    textLight: '#ffffff',
    textSecondary: '#64748b'
  },
  {
    name: '暖棕咖啡',
    header: '#92400e',
    footer: '#78350f',
    card: '#fefce8',
    accent: '#d97706', // 改為淺棕色，保持棕色系
    text: '#451a03',
    textLight: '#ffffff',
    textSecondary: '#78716c'
  },
  {
    name: '極簡黑白',
    header: '#18181b',
    footer: '#09090b',
    card: '#fafafa',
    accent: '#71717a', // 改為中性灰色，保持黑白灰系
    text: '#27272a',
    textLight: '#ffffff',
    textSecondary: '#71717a'
  },
  {
    name: '青綠湖水',
    header: '#0891b2',
    footer: '#0e7490',
    card: '#f0fdfa',
    accent: '#22d3ee', // 改為淺青色，保持青色系
    text: '#164e63',
    textLight: '#ffffff',
    textSecondary: '#475569'
  },
  {
    name: '嫩綠春意',
    header: '#65a30d',
    footer: '#4d7c0f',
    card: '#f7fee7',
    accent: '#84cc16', // 改為淺綠色，保持綠色系
    text: '#365314',
    textLight: '#ffffff',
    textSecondary: '#52525b'
  },  {
    name: '夢幻漸變',
    header: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    footer: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    card: '#ffffff',
    accent: '#a78bfa', // 改為淺紫色，與漸變主題保持協調
    text: '#374151',
    textLight: '#ffffff',
    textSecondary: '#6b7280'
  }
]

// 當前主題狀態
const currentTheme = ref(colorThemes[0])
const isColorPaletteOpen = ref(false)

export function useColorTheme() {  // 應用主題到文檔
  const applyTheme = (theme: typeof colorThemes[0]) => {
    if (process.client) {
      const root = document.documentElement
      
      // 輔助函數：提取RGB值
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result 
          ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
          : '0, 0, 0'
      }
      
      // 創建動態背景漸層
      const createDynamicGradient = (theme: typeof colorThemes[0]) => {
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
      }
      
      // 輔助函數：調整顏色亮度
      const adjustBrightness = (hex: string, percent: number) => {
        if (hex.includes('gradient')) return hex
        
        const rgb = hexToRgb(hex).split(', ').map(Number)
        const adjustedRgb = rgb.map(value => {
          const adjusted = Math.round(value * (1 + percent / 100))
          return Math.max(0, Math.min(255, adjusted))
        })
        
        return `#${adjustedRgb.map(v => v.toString(16).padStart(2, '0')).join('')}`
      }
      
      // 輔助函數：判斷顏色是否為淺色
      const isLightColor = (hex: string) => {
        if (hex.includes('gradient')) return false
        
        const rgb = hexToRgb(hex).split(', ').map(Number)
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
        return brightness > 128
      }
      
      // 輔助函數：生成相近色調
      const generateToneVariations = (baseColor: string) => {
        if (baseColor.includes('gradient')) {
          return {
            lighter: '#6b7280',
            light: '#4b5563',
            base: '#374151',
            dark: '#1f2937',
            darker: '#111827'
          }
        }
        
        return {
          lighter: adjustBrightness(baseColor, 40),   // 更淺
          light: adjustBrightness(baseColor, 20),     // 淺
          base: baseColor,                            // 原色
          dark: adjustBrightness(baseColor, -20),     // 深
          darker: adjustBrightness(baseColor, -40)    // 更深
        }
      }
      
      // 設置基礎 CSS 變量
      root.style.setProperty('--theme-header', theme.header)
      root.style.setProperty('--theme-footer', theme.footer)
      root.style.setProperty('--theme-card', theme.card)
      root.style.setProperty('--theme-accent', theme.accent)
      root.style.setProperty('--theme-text', theme.text)
      root.style.setProperty('--theme-text-light', theme.textLight)
      root.style.setProperty('--theme-text-secondary', theme.textSecondary)
        // 生成主題色調變化
      const headerTones = generateToneVariations(theme.header)
      const accentTones = generateToneVariations(theme.accent)
      
      // 設置色調變化變量
      root.style.setProperty('--tone-header-lighter', headerTones.lighter)
      root.style.setProperty('--tone-header-light', headerTones.light)
      root.style.setProperty('--tone-header-base', headerTones.base)
      root.style.setProperty('--tone-header-dark', headerTones.dark)
      root.style.setProperty('--tone-header-darker', headerTones.darker)
      
      // 添加額外的極深和極淺色調
      root.style.setProperty('--tone-header-much-lighter', adjustBrightness(headerTones.lighter, 30))
      root.style.setProperty('--tone-header-much-darker', adjustBrightness(headerTones.darker, -30))
      
      root.style.setProperty('--tone-accent-lighter', accentTones.lighter)
      root.style.setProperty('--tone-accent-light', accentTones.light)
      root.style.setProperty('--tone-accent-base', accentTones.base)
      root.style.setProperty('--tone-accent-dark', accentTones.dark)
      root.style.setProperty('--tone-accent-darker', accentTones.darker)
      
      // 添加額外的極深和極淺強調色調
      root.style.setProperty('--tone-accent-much-lighter', adjustBrightness(accentTones.lighter, 30))
      root.style.setProperty('--tone-accent-much-darker', adjustBrightness(accentTones.darker, -30))
      
      // 添加適合在不同背景上的文字顏色
      const isHeaderLight = isLightColor(theme.header)
      root.style.setProperty('--tone-text-on-dark', isHeaderLight ? theme.text : theme.textLight)
      root.style.setProperty('--tone-text-on-light', isHeaderLight ? theme.textLight : theme.text)
      
      // 設置RGB變量用於半透明效果
      root.style.setProperty('--theme-header-rgb', hexToRgb(theme.header))
      root.style.setProperty('--theme-footer-rgb', hexToRgb(theme.footer))
      root.style.setProperty('--theme-accent-rgb', hexToRgb(theme.accent))
      
      // 設置動態背景變量
      root.style.setProperty('--dynamic-bg-gradient', createDynamicGradient(theme))
      root.style.setProperty('--theme-primary-alpha', `${theme.header}40`)
      root.style.setProperty('--theme-accent-alpha', `${theme.accent}30`)
      root.style.setProperty('--theme-footer-alpha', `${theme.footer}20`)

      // 動態計算背景亮度並設置智能文字顏色
      const getSmartTextColors = (bgColor: string, cardColor: string) => {
        const getBrightness = (color: string) => {
          if (color.includes('gradient')) return 128
          const rgb = hexToRgb(color).split(', ').map(Number)
          return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
        }
        
        const headerBrightness = getBrightness(bgColor)
        const cardBrightness = getBrightness(cardColor)
        
        // 根據背景亮度選擇相近色調的文字顏色
        if (headerBrightness < 128) {
          // 深色背景 - 使用較亮的相近色調
          return {
            primary: headerTones.lighter,
            secondary: headerTones.light,
            accent: accentTones.lighter,
            muted: headerTones.light
          }
        } else {
          // 淺色背景 - 使用較深的相近色調
          return {
            primary: headerTones.darker,
            secondary: headerTones.dark,
            accent: accentTones.dark,
            muted: headerTones.base
          }
        }
      }
      
      const smartColors = getSmartTextColors(theme.header, theme.card)
      
      // 設置智能字體顏色變量
      root.style.setProperty('--typography-primary', smartColors.primary)
      root.style.setProperty('--typography-secondary', smartColors.secondary)
      root.style.setProperty('--typography-accent', smartColors.accent)
      root.style.setProperty('--typography-light', theme.textLight)
      root.style.setProperty('--typography-muted', smartColors.muted)
      
      // 設置選中和懸停狀態的顏色
      root.style.setProperty('--typography-primary-hover', accentTones.light)
      root.style.setProperty('--typography-accent-hover', accentTones.dark)
      root.style.setProperty('--typography-selected', accentTones.base)
      root.style.setProperty('--typography-selected-bg', `rgba(${hexToRgb(accentTones.light)}, 0.15)`)
      
      // 更新當前主題
      currentTheme.value = theme
      
      // 保存到本地存儲
      localStorage.setItem('colorTheme', JSON.stringify(theme))
    }
  }

  // 切換調色盤顯示
  const toggleColorPalette = () => {
    isColorPaletteOpen.value = !isColorPaletteOpen.value
  }

  // 選擇主題
  const selectTheme = (theme: typeof colorThemes[0]) => {
    applyTheme(theme)
    isColorPaletteOpen.value = false
  }

  // 初始化主題
  const initializeTheme = () => {
    if (process.client) {
      const saved = localStorage.getItem('colorTheme')
      if (saved) {
        try {
          const theme = JSON.parse(saved)
          applyTheme(theme)
        } catch {
          applyTheme(colorThemes[0])
        }
      } else {
        applyTheme(colorThemes[0])
      }
    }
  }

  // 監聽主題變化
  watch(currentTheme, (newTheme) => {
    if (process.client) {
      applyTheme(newTheme)
    }
  })

  return {
    currentTheme: readonly(currentTheme),
    colorThemes,
    isColorPaletteOpen: readonly(isColorPaletteOpen),
    toggleColorPalette,
    selectTheme,
    initializeTheme
  }
}
