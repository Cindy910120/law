<template>
  <div class="response-guide-container">
    <!-- 標題區域 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">性騷擾應對指引</h1>
        <p class="hero-subtitle">完整的處理步驟、申訴指南與法律保障</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">24小時</span>
            <span class="stat-label">專線服務</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1年</span>
            <span class="stat-label">申訴時效</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">隱私保護</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 快速導航 -->
    <div class="quick-nav-section">
      <h3 class="quick-nav-title">快速導航</h3>
      <div class="quick-nav-grid">
        <a href="#emergency" class="nav-button emergency">🆘 緊急處理</a>
        <a href="#evidence" class="nav-button evidence">📝 證據保存</a>
        <a href="#complaint" class="nav-button complaint">📢 申訴管道</a>
        <a href="#anonymous" class="nav-button anonymous">📮 匿名申訴</a>
        <a href="#legal" class="nav-button legal">⚖️ 法律權益</a>
        <a href="#support" class="nav-button support">🤝 心理支持</a>
      </div>
    </div>    <!-- 緊急處理區域 -->
    <div id="emergency" class="emergency-section">
      <div class="section-header">
        <div class="section-icon emergency-icon">🚨</div>
        <div class="section-info">
          <h2 class="section-title">緊急處理</h2>
          <p class="section-subtitle">遇到性騷擾當下的立即行動</p>
        </div>
      </div>
      
      <div class="emergency-grid">
        <div class="urgent-card immediate">
          <h3 class="urgent-title">🚨 立即行動</h3>
          <ul class="urgent-list">
            <li>確保自身安全，立即離開危險環境</li>
            <li>大聲拒絕，明確表達「不要」、「停止」</li>
            <li>如有立即危險，撥打110報警</li>
            <li>向附近的人求助或呼救</li>
          </ul>
        </div>
        
        <div class="urgent-card preserve">
          <h3 class="urgent-title">📱 即時記錄</h3>
          <ul class="urgent-list">
            <li>立即記錄時間、地點、人物</li>
            <li>保存相關證據（訊息、錄音、照片）</li>
            <li>尋找目擊證人並請其作證</li>
            <li>截圖保存社群媒體互動紀錄</li>
          </ul>
        </div>
        
        <div class="urgent-card report">
          <h3 class="urgent-title">📞 通報求助</h3>
          <ul class="urgent-list">
            <li>向信任的主管或同事報告</li>
            <li>聯絡公司人資或申訴窗口</li>
            <li>撥打24小時諮詢專線</li>
            <li>告知家人朋友尋求支持</li>
          </ul>
        </div>
      </div>
    </div>    <!-- 證據保存專區 -->
    <div id="evidence" class="evidence-section">
      <div class="section-header">
        <div class="section-icon">📝</div>
        <div class="section-info">
          <h2 class="section-title">證據保存指南</h2>
          <p class="section-subtitle">詳細記錄是維護權益的關鍵</p>
        </div>
      </div>
      
      <div class="evidence-content">
        <div class="evidence-checklist">
          <h3 class="checklist-title">🗂️ 證據收集清單</h3>
          <div class="checklist-grid">
            <div class="checklist-item">
              <input type="checkbox" id="time-record" class="checklist-checkbox">
              <label for="time-record" class="checklist-label">
                <span class="checklist-icon">📅</span>
                <div class="checklist-text">
                  <strong>時間記錄</strong>
                  <p>詳細記錄每次事件的日期、時間、持續時間</p>
                </div>
              </label>
            </div>
            
            <div class="checklist-item">
              <input type="checkbox" id="location-record" class="checklist-checkbox">
              <label for="location-record" class="checklist-label">
                <span class="checklist-icon">📍</span>
                <div class="checklist-text">
                  <strong>地點記錄</strong>
                  <p>記錄事發地點、環境描述、是否有監視器</p>
                </div>
              </label>
            </div>
            
            <div class="checklist-item">
              <input type="checkbox" id="witness-record" class="checklist-checkbox">
              <label for="witness-record" class="checklist-label">
                <span class="checklist-icon">👥</span>
                <div class="checklist-text">
                  <strong>證人資料</strong>
                  <p>記錄目擊者姓名、聯絡方式、願意作證意願</p>
                </div>
              </label>
            </div>
            
            <div class="checklist-item">
              <input type="checkbox" id="digital-evidence" class="checklist-checkbox">
              <label for="digital-evidence" class="checklist-label">
                <span class="checklist-icon">📱</span>
                <div class="checklist-text">
                  <strong>數位證據</strong>
                  <p>截圖簡訊、郵件、社群媒體對話紀錄</p>
                </div>
              </label>
            </div>
            
            <div class="checklist-item">
              <input type="checkbox" id="physical-evidence" class="checklist-checkbox">
              <label for="physical-evidence" class="checklist-label">
                <span class="checklist-icon">🩺</span>
                <div class="checklist-text">
                  <strong>身體證據</strong>
                  <p>如有身體接觸，保留衣物、就醫診斷證明</p>
                </div>
              </label>
            </div>
            
            <div class="checklist-item">
              <input type="checkbox" id="behavior-record" class="checklist-checkbox">
              <label for="behavior-record" class="checklist-label">
                <span class="checklist-icon">📖</span>
                <div class="checklist-text">
                  <strong>行為描述</strong>
                  <p>詳細描述騷擾行為、對話內容、感受影響</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div class="evidence-tips">
          <h3 class="tips-title">💡 保存證據小技巧</h3>
          <div class="tips-list">
            <div class="tip-item">
              <span class="tip-icon">📧</span>
              <p><strong>郵件備份：</strong>將重要郵件轉寄給自己或信任的人</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">☁️</span>
              <p><strong>雲端備份：</strong>將證據上傳至Google Drive、iCloud等雲端服務</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">📝</span>
              <p><strong>書面記錄：</strong>用筆記本詳細記錄，並請信任的人見證簽名</p>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🔒</span>
              <p><strong>安全保存：</strong>使用密碼保護檔案，避免證據被竄改或刪除</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 申訴管道區域 -->
    <div id="complaint" class="complaint-section">
      <div class="section-header">
        <div class="section-icon">📢</div>
        <div class="section-info">
          <h2 class="section-title">申訴管道指南</h2>
          <p class="section-subtitle">選擇適合的申訴途徑維護權益</p>
        </div>
      </div>
      
      <div class="complaint-tabs">
        <button class="tab-button active" data-tab="internal">公司內部</button>
        <button class="tab-button" data-tab="external">外部機關</button>
        <button class="tab-button" data-tab="legal">法律途徑</button>
      </div>
      
      <div class="tab-content">
        <div id="internal" class="tab-panel active">
          <div class="complaint-flow">
            <h3 class="flow-title">🏢 公司內部申訴流程</h3>
            <div class="flow-steps">
              <div class="flow-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>向直屬主管報告</h4>
                  <p>如果騷擾者不是直屬主管，優先向直屬主管報告</p>
                </div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>聯絡人資部門</h4>
                  <p>填寫正式申訴表單，要求啟動調查程序</p>
                </div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>配合調查程序</h4>
                  <p>提供證據資料，接受調查小組訪談</p>
                </div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>等待處理結果</h4>
                  <p>公司應在30日內完成調查並通知結果</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="internal-tips">
            <h4 class="tips-subtitle">📋 內部申訴注意事項</h4>
            <ul class="tips-list-simple">
              <li>保留所有申訴相關文件副本</li>
              <li>要求書面回覆處理結果</li>
              <li>如不滿意處理結果，可進一步申訴</li>
              <li>注意是否有報復行為發生</li>
            </ul>
          </div>
        </div>
        
        <div id="external" class="tab-panel">
          <div class="external-options">
            <h3 class="flow-title">🏛️ 外部申訴機關</h3>
            <div class="options-grid">
              <div class="option-card">
                <div class="option-icon">🏢</div>
                <h4 class="option-title">勞工局申訴</h4>
                <p class="option-description">適用於工作場所性騷擾案件</p>
                <ul class="option-details">
                  <li>可線上申訴或現場申訴</li>
                  <li>免費服務</li>
                  <li>具有調查權力</li>
                  <li>可裁罰雇主</li>
                </ul>
                <a href="#" class="option-link">查看申訴方式 →</a>
              </div>
              
              <div class="option-card">
                <div class="option-icon">🏛️</div>
                <h4 class="option-title">社會局申訴</h4>
                <p class="option-description">適用於一般場所性騷擾案件</p>
                <ul class="option-details">
                  <li>處理非工作場所案件</li>
                  <li>提供調解服務</li>
                  <li>協助法律諮詢</li>
                  <li>轉介相關資源</li>
                </ul>
                <a href="#" class="option-link">查看申訴方式 →</a>
              </div>
              
              <div class="option-card">
                <div class="option-icon">⚖️</div>
                <h4 class="option-title">性別平等委員會</h4>
                <p class="option-description">各機關學校性平會</p>
                <ul class="option-details">
                  <li>學校或機關內部</li>
                  <li>專業調查小組</li>
                  <li>性別平等專業</li>
                  <li>教育訓練功能</li>
                </ul>
                <a href="#" class="option-link">查看申訴方式 →</a>
              </div>
            </div>
          </div>
        </div>
        
        <div id="legal" class="tab-panel">
          <div class="legal-options">
            <h3 class="flow-title">⚖️ 法律途徑</h3>
            <div class="legal-steps">
              <div class="legal-step">
                <h4 class="legal-step-title">🏛️ 民事訴訟</h4>
                <div class="legal-step-content">
                  <p class="legal-description">向法院提起民事訴訟，請求損害賠償</p>
                  <div class="legal-details">
                    <div class="legal-detail">
                      <strong>訴訟標的：</strong>
                      <span>精神損害賠償、財產損失</span>
                    </div>
                    <div class="legal-detail">
                      <strong>時效限制：</strong>
                      <span>知悉損害及賠償義務人後2年內</span>
                    </div>
                    <div class="legal-detail">
                      <strong>舉證責任：</strong>
                      <span>需提供充分證據證明損害事實</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="legal-step">
                <h4 class="legal-step-title">👮 刑事告發</h4>
                <div class="legal-step-content">
                  <p class="legal-description">向檢察官或警察機關提出刑事告發</p>
                  <div class="legal-details">
                    <div class="legal-detail">
                      <strong>適用情況：</strong>
                      <span>涉及刑法妨害風化、強制等罪</span>
                    </div>
                    <div class="legal-detail">
                      <strong>告訴期間：</strong>
                      <span>知悉犯人後6個月內</span>
                    </div>
                    <div class="legal-detail">
                      <strong>處理機關：</strong>
                      <span>警察局、地檢署</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    <!-- 匿名申訴專區 -->
    <div id="anonymous" class="anonymous-section">
      <div class="section-header">
        <div class="section-icon">📮</div>
        <div class="section-info">
          <h2 class="section-title">匿名申訴指南</h2>
          <p class="section-subtitle">保護身份安全的申訴方式</p>
        </div>
      </div>
      
      <div class="anonymous-content">
        <div class="anonymous-methods">
          <h3 class="methods-title">🔒 匿名申訴方式</h3>
          <div class="methods-grid">
            <div class="method-card">
              <div class="method-icon">📧</div>
              <h4 class="method-title">匿名信件</h4>
              <p class="method-description">寄送實體信件或電子郵件至相關機關</p>
              <div class="method-pros">
                <span class="pros-title">優點：</span>
                <ul>
                  <li>完全匿名</li>
                  <li>有書面紀錄</li>
                  <li>可附加證據</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <div class="method-icon">📞</div>
              <h4 class="method-title">匿名電話</h4>
              <p class="method-description">透過申訴專線進行匿名舉報</p>
              <div class="method-pros">
                <span class="pros-title">優點：</span>
                <ul>
                  <li>即時處理</li>
                  <li>可詳細說明</li>
                  <li>互動性強</li>
                </ul>
              </div>
            </div>
            
            <div class="method-card">
              <div class="method-icon">💻</div>
              <h4 class="method-title">線上平台</h4>
              <p class="method-description">使用官方匿名申訴網站或表單</p>
              <div class="method-pros">
                <span class="pros-title">優點：</span>
                <ul>
                  <li>24小時可用</li>
                  <li>操作簡便</li>
                  <li>有編號追蹤</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="letter-guide">
          <h3 class="guide-title">✍️ 匿名申訴信撰寫指南</h3>
          <div class="letter-template">
            <div class="template-header">
              <h4 class="template-title">📝 匿名申訴信範本</h4>
              <p class="template-note">以下範本可供參考，請依實際情況調整內容</p>
            </div>
            
            <div class="template-content">
              <div class="template-section">
                <h5 class="section-label">1. 信件標題</h5>
                <div class="template-text">
                  <p><strong>主旨：</strong>關於職場性騷擾事件之匿名申訴</p>
                  <p><strong>收件者：</strong>[公司人資部門/勞工局/社會局]</p>
                </div>
              </div>
              
              <div class="template-section">
                <h5 class="section-label">2. 事件概述</h5>
                <div class="template-text">
                  <p>本人於[公司/機構名稱]工作期間，遭遇性騷擾事件，為維護職場安全與個人權益，特此匿名申訴。</p>
                </div>
              </div>
              
              <div class="template-section">
                <h5 class="section-label">3. 詳細描述</h5>
                <div class="template-details">
                  <div class="detail-item">
                    <strong>時間：</strong>
                    <span>詳細記載事件發生的日期、時間（如：2024年X月X日下午3點）</span>
                  </div>
                  <div class="detail-item">
                    <strong>地點：</strong>
                    <span>具體地點描述（如：公司會議室、茶水間、電梯內）</span>
                  </div>
                  <div class="detail-item">
                    <strong>當事人：</strong>
                    <span>騷擾者身份描述（如：部門主管、同事、客戶，避免直接姓名）</span>
                  </div>
                  <div class="detail-item">
                    <strong>事件經過：</strong>
                    <span>詳細描述騷擾行為，包括言語、動作、持續時間等</span>
                  </div>
                  <div class="detail-item">
                    <strong>證據：</strong>
                    <span>說明現有證據（如：錄音、簡訊、目擊者）</span>
                  </div>
                  <div class="detail-item">
                    <strong>影響：</strong>
                    <span>描述對工作、生活、心理造成的影響</span>
                  </div>
                </div>
              </div>
              
              <div class="template-section">
                <h5 class="section-label">4. 申訴請求</h5>
                <div class="template-text">
                  <p>懇請貴單位：</p>
                  <ul>
                    <li>立即展開調查</li>
                    <li>保護申訴人身份</li>
                    <li>採取適當懲處措施</li>
                    <li>防止類似事件再次發生</li>
                    <li>提供後續處理結果</li>
                  </ul>
                </div>
              </div>
              
              <div class="template-section">
                <h5 class="section-label">5. 聯絡方式（可選）</h5>
                <div class="template-text">
                  <p>如需進一步了解詳情，可透過以下方式聯絡：</p>
                  <p>[可提供臨時Email、電話，或表明僅接受書面回覆]</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="writing-tips">
            <h4 class="tips-subtitle">📌 撰寫要點提醒</h4>
            <div class="tips-grid">
              <div class="tip-card important">
                <h5 class="tip-title">✅ 必須包含</h5>
                <ul>
                  <li>事件發生的具體時間、地點</li>
                  <li>騷擾行為的詳細描述</li>
                  <li>對個人造成的影響</li>
                  <li>希望的處理方式</li>
                </ul>
              </div>
              
              <div class="tip-card avoid">
                <h5 class="tip-title">❌ 避免包含</h5>
                <ul>
                  <li>可能暴露身份的個人資訊</li>
                  <li>情緒化的用詞</li>
                  <li>未經證實的指控</li>
                  <li>威脅性語言</li>
                </ul>
              </div>
              
              <div class="tip-card protect">
                <h5 class="tip-title">🔒 身份保護</h5>
                <ul>
                  <li>使用臨時信箱寄送</li>
                  <li>避免提及獨特的工作經歷</li>
                  <li>不使用個人慣用詞彙</li>
                  <li>可請信任的人代為寄送</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    <!-- 心理支持區域 -->
    <div id="support" class="support-section">
      <div class="section-header">
        <div class="section-icon">🤝</div>
        <div class="section-info">
          <h2 class="section-title">心理支持與復原</h2>
          <p class="section-subtitle">重建信心，走出陰霾</p>
        </div>
      </div>
      
      <div class="support-content">
        <div class="recovery-stages">
          <h3 class="stages-title">🌱 復原歷程指南</h3>
          <div class="stages-timeline">
            <div class="stage-item">
              <div class="stage-icon">😔</div>
              <div class="stage-content">
                <h4>創傷反應期</h4>
                <p>可能出現焦慮、憤怒、自責等情緒</p>
                <span class="stage-tip">正常反應，給自己時間</span>
              </div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage-item">
              <div class="stage-icon">💪</div>
              <div class="stage-content">
                <h4>尋求支持期</h4>
                <p>主動尋求專業協助與親友支持</p>
                <span class="stage-tip">不要獨自承受</span>
              </div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage-item">
              <div class="stage-icon">🌟</div>
              <div class="stage-content">
                <h4>重建信心期</h4>
                <p>逐漸恢復自信，重新掌控生活</p>
                <span class="stage-tip">相信自己的力量</span>
              </div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage-item">
              <div class="stage-icon">🦋</div>
              <div class="stage-content">
                <h4>成長茁壯期</h4>
                <p>從經驗中成長，幫助他人</p>
                <span class="stage-tip">化創傷為力量</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="support-resources">
          <h3 class="resources-title">🏥 專業支持資源</h3>
          <div class="resources-grid">
            <div class="resource-card therapy">
              <div class="resource-icon">👩‍⚕️</div>
              <h4 class="resource-title">心理諮商</h4>
              <div class="resource-content">
                <p class="resource-description">專業心理師提供個別或團體諮商</p>
                <div class="resource-options">
                  <div class="option">
                    <strong>各大醫院精神科</strong>
                    <span>健保給付，需醫師轉介</span>
                  </div>
                  <div class="option">
                    <strong>心理諮商所</strong>
                    <span>自費，約1500-3000元/次</span>
                  </div>
                  <div class="option">
                    <strong>學校輔導中心</strong>
                    <span>學生免費資源</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="resource-card support-group">
              <div class="resource-icon">👥</div>
              <h4 class="resource-title">支持團體</h4>
              <div class="resource-content">
                <p class="resource-description">與有相似經驗的人互相支持</p>
                <div class="resource-benefits">
                  <ul>
                    <li>減少孤獨感</li>
                    <li>分享應對策略</li>
                    <li>獲得情感支持</li>
                    <li>建立社會連結</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="resource-card self-care">
              <div class="resource-icon">🧘</div>
              <h4 class="resource-title">自我照顧</h4>
              <div class="resource-content">
                <p class="resource-description">日常生活中的自我療癒方法</p>
                <div class="self-care-tips">
                  <div class="care-category">
                    <strong>身體照顧：</strong>
                    <span>規律運動、充足睡眠、健康飲食</span>
                  </div>
                  <div class="care-category">
                    <strong>情緒管理：</strong>
                    <span>冥想、寫日記、藝術創作</span>
                  </div>
                  <div class="care-category">
                    <strong>社交支持：</strong>
                    <span>與信任的人分享、參與活動</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 24小時支援專線 -->
    <div class="hotline-section">
      <div class="hotline-banner">
        <div class="banner-content">
          <h3 class="banner-title">🆘 24小時緊急支援</h3>
          <p class="banner-subtitle">任何時候都有人陪伴你</p>
        </div>
        <div class="hotline-grid">
          <div class="hotline-card urgent">
            <div class="hotline-icon">📞</div>
            <div class="hotline-info">
              <h4 class="hotline-title">危機專線</h4>              <div class="hotline-numbers">
                <div class="number-item">
                  <span class="number">113</span>
                  <span class="description">保護專線（婦幼保護）</span>
                </div>
                <div class="number-item">
                  <span class="number">1995</span>
                  <span class="description">生命線協談專線</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="hotline-card counseling">
            <div class="hotline-icon">💬</div>
            <div class="hotline-info">
              <h4 class="hotline-title">諮詢專線</h4>
              <div class="hotline-numbers">
                <div class="number-item">
                  <span class="number">02-2555-8595</span>
                  <span class="description">婦女救援基金會</span>
                </div>
                <div class="number-item">
                  <span class="number">02-2391-7133</span>
                  <span class="description">現代婦女基金會</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="hotline-card legal">
            <div class="hotline-icon">⚖️</div>
            <div class="hotline-info">
              <h4 class="hotline-title">法律諮詢</h4>              <div class="hotline-numbers">
                <div class="number-item">
                  <span class="number">412-8518</span>
                  <span class="description">法扶專線（手機加02）</span>
                </div>
                <div class="number-item">
                  <span class="number">1955</span>
                  <span class="description">勞工諮詢申訴專線</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- 法律權益區域 -->
    <div id="legal" class="legal-rights-section">
      <div class="section-header">
        <div class="section-icon">⚖️</div>
        <div class="section-info">
          <h2 class="section-title">法律權益保障</h2>
          <p class="section-subtitle">了解你的權利與法律保護</p>
        </div>
      </div>
      
      <div class="rights-content">
        <div class="rights-overview">
          <h3 class="overview-title">🛡️ 基本權益一覽</h3>
          <div class="rights-grid">
            <div class="right-item">
              <div class="right-icon">🏢</div>
              <h4 class="right-title">工作權保障</h4>
              <p class="right-description">雇主不得因申訴而進行報復性處分</p>
              <div class="right-details">
                <span class="detail-tag">保護範圍</span>
                <ul>
                  <li>不得解僱或強迫離職</li>
                  <li>不得降職或減薪</li>
                  <li>不得調動至不合理職位</li>
                  <li>不得影響升遷考核</li>
                </ul>
              </div>
            </div>
            
            <div class="right-item">
              <div class="right-icon">💰</div>
              <h4 class="right-title">損害賠償</h4>
              <p class="right-description">可請求精神損害及財產損失賠償</p>
              <div class="right-details">
                <span class="detail-tag">賠償項目</span>
                <ul>
                  <li>精神損害賠償：新台幣1-50萬元</li>
                  <li>醫療費用支出</li>
                  <li>因請假造成的薪資損失</li>
                  <li>心理諮商費用</li>
                </ul>
              </div>
            </div>
            
            <div class="right-item">
              <div class="right-icon">🔒</div>
              <h4 class="right-title">隱私保護</h4>
              <p class="right-description">調查過程中嚴格保護當事人隱私</p>
              <div class="right-details">
                <span class="detail-tag">保護措施</span>
                <ul>
                  <li>不得洩露申訴人身份</li>
                  <li>調查資料嚴格保密</li>
                  <li>避免二次傷害</li>
                  <li>可申請調解或和解</li>
                </ul>
              </div>
            </div>
            
            <div class="right-item">
              <div class="right-icon">⏰</div>
              <h4 class="right-title">申訴時效</h4>
              <p class="right-description">把握黃金申訴期間維護權益</p>
              <div class="right-details">
                <span class="detail-tag">時效規定</span>
                <ul>
                  <li>事件發生後1年內可申訴</li>
                  <li>持續性騷擾以最後一次為準</li>
                  <li>刑事告訴：知悉犯人後6個月</li>
                  <li>民事求償：知悉損害後2年</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="legal-process">
          <h3 class="process-title">📋 法律程序說明</h3>
          <div class="process-tabs">
            <button class="process-tab active" data-process="admin">行政申訴</button>
            <button class="process-tab" data-process="civil">民事訴訟</button>
            <button class="process-tab" data-process="criminal">刑事程序</button>
          </div>
          
          <div class="process-content">
            <div id="admin" class="process-panel active">
              <div class="process-info">
                <h4 class="process-subtitle">🏛️ 行政申訴流程</h4>
                <div class="process-timeline">
                  <div class="timeline-item">
                    <span class="timeline-number">1</span>
                    <div class="timeline-content">
                      <h5>提出申訴</h5>
                      <p>向勞工局或社會局提出申訴</p>
                      <span class="timeline-duration">當日</span>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <span class="timeline-number">2</span>
                    <div class="timeline-content">
                      <h5>受理審查</h5>
                      <p>機關受理並進行初步審查</p>
                      <span class="timeline-duration">7日內</span>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <span class="timeline-number">3</span>
                    <div class="timeline-content">
                      <h5>調查程序</h5>
                      <p>成立調查小組進行調查</p>
                      <span class="timeline-duration">2個月內</span>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <span class="timeline-number">4</span>
                    <div class="timeline-content">
                      <h5>調查結果</h5>
                      <p>公布調查結果並執行處分</p>
                      <span class="timeline-duration">調查完成後</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="civil" class="process-panel">
              <div class="process-info">
                <h4 class="process-subtitle">⚖️ 民事訴訟流程</h4>
                <div class="civil-details">
                  <div class="civil-step">
                    <h5>起訴準備</h5>
                    <ul>
                      <li>收集完整證據資料</li>
                      <li>計算損害賠償金額</li>
                      <li>委任律師（建議）</li>
                      <li>繳納裁判費</li>
                    </ul>
                  </div>
                  <div class="civil-step">
                    <h5>法院程序</h5>
                    <ul>
                      <li>遞交起訴狀</li>
                      <li>開庭進行言詞辯論</li>
                      <li>證據調查與認定</li>
                      <li>法院判決</li>
                    </ul>
                  </div>
                  <div class="civil-cost">
                    <h5>💰 費用說明</h5>
                    <p><strong>裁判費：</strong>依請求金額計算（如請求20萬元約需4,000元裁判費）</p>
                    <p><strong>律師費：</strong>可與敗訴方請求合理律師費</p>
                    <p><strong>法扶資源：</strong>符合條件可申請法律扶助</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="criminal" class="process-panel">
              <div class="process-info">
                <h4 class="process-subtitle">👮 刑事程序流程</h4>
                <div class="criminal-details">
                  <div class="criminal-conditions">
                    <h5>🎯 成立要件</h5>
                    <div class="conditions-grid">
                      <div class="condition-item">
                        <strong>強制猥褻罪</strong>
                        <p>以強暴、脅迫等方法對人猥褻</p>
                        <span class="penalty">刑期：6個月以上5年以下</span>
                      </div>
                      <div class="condition-item">
                        <strong>公然猥褻罪</strong>
                        <p>在公共場所或公眾得見聞之處猥褻</p>
                        <span class="penalty">刑期：1年以下或拘役</span>
                      </div>
                      <div class="condition-item">
                        <strong>妨害風化罪</strong>
                        <p>散布、播送猥褻影像或物品</p>
                        <span class="penalty">刑期：2年以下或罰金</span>
                      </div>
                    </div>
                  </div>
                  <div class="criminal-process">
                    <h5>📋 告訴流程</h5>
                    <ol>
                      <li>向警察局或地檢署提出告訴</li>
                      <li>製作筆錄並提供證據</li>
                      <li>檢察官進行偵查</li>
                      <li>決定起訴或不起訴</li>
                      <li>如起訴則進入法院審理</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回按鈕 -->
    <div class="back-section">
      <NuxtLink to="/labor-law/sexual-harassment-prevention" class="back-button">
        ← 返回性騷擾防治專區
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 標籤頁切換功能
  const initTabSwitching = () => {
    // 申訴管道標籤頁
    const complaintTabs = document.querySelectorAll('.tab-button')
    const complaintPanels = document.querySelectorAll('.tab-panel')
    
    complaintTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab')
        
        if (targetTab) {
          // 移除所有active類
          complaintTabs.forEach(t => t.classList.remove('active'))
          complaintPanels.forEach(p => p.classList.remove('active'))
          
          // 添加active類到當前標籤和面板
          tab.classList.add('active')
          const targetPanel = document.getElementById(targetTab)
          if (targetPanel) {
            targetPanel.classList.add('active')
          }
        }
      })
    })
    
    // 法律程序標籤頁
    const processTabs = document.querySelectorAll('.process-tab')
    const processPanels = document.querySelectorAll('.process-panel')
    
    processTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetProcess = tab.getAttribute('data-process')
        
        if (targetProcess) {
          // 移除所有active類
          processTabs.forEach(t => t.classList.remove('active'))
          processPanels.forEach(p => p.classList.remove('active'))
          
          // 添加active類到當前標籤和面板
          tab.classList.add('active')
          const targetPanel = document.getElementById(targetProcess)
          if (targetPanel) {
            targetPanel.classList.add('active')
          }
        }
      })
    })
  }
  
  // 平滑滾動到錨點
  const initSmoothScrolling = () => {
    const navButtons = document.querySelectorAll('.nav-button')
    
    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const href = button.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      })
    })
  }
  
  // 證據保存清單交互
  const initEvidenceChecklist = () => {
    const checkboxes = document.querySelectorAll('.checklist-checkbox')
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        // 可以在這裡添加保存用戶選擇的邏輯
        const checkedCount = document.querySelectorAll('.checklist-checkbox:checked').length
        const totalCount = checkboxes.length
        
        // 如果全部勾選，可以顯示完成提示
        if (checkedCount === totalCount) {
          console.log('所有證據收集項目已完成！')
          // 可以在這裡添加完成提示的UI
        }
      })
    })
  }
  
  // 初始化所有功能
  initTabSwitching()
  initSmoothScrolling()
  initEvidenceChecklist()
})
</script>

<style scoped>
/* 全局容器 */
.response-guide-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1rem;
  font-family: var(--font-family-base, 'Inter', sans-serif);
}

/* 標題區域 */
.hero-section {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 2rem;
  color: white;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-4xl, 2.25rem);
  font-weight: var(--font-weight-bold, 700);
  margin-bottom: 1rem;
  color: white;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 4px 8px rgba(0, 0, 0, 0.6),
    0 0 10px rgba(255, 255, 255, 0.3);
  letter-spacing: 0.5px;
}

.hero-subtitle {
  font-size: var(--font-size-xl, 1.25rem);
  margin-bottom: 2rem;
  color: white;
  opacity: 1;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.7),
    0 2px 6px rgba(0, 0, 0, 0.5);
  font-weight: var(--font-weight-medium, 500);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.stat-number {
  display: block;
  font-size: var(--font-size-3xl, 1.875rem);
  font-weight: var(--font-weight-bold, 700);
  margin-bottom: 0.5rem;
  color: #1f2937;
  text-shadow: none;
}

.stat-label {
  font-size: var(--font-size-base, 1rem);
  color: #374151;
  font-weight: var(--font-weight-medium, 500);
  opacity: 1;
}

/* 快速導航 */
.quick-nav-section {
  margin-bottom: 3rem;
  text-align: center;
}

.quick-nav-title {
  font-size: var(--font-size-xl, 1.25rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: var(--font-weight-medium, 500);
  font-size: var(--font-size-sm, 0.875rem);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-button.emergency {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
}

.nav-button.evidence {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}

.nav-button.complaint {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
}

.nav-button.anonymous {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: white;
}

.nav-button.legal {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.nav-button.support {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* 區塊標題樣式 */
.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: left;
}

.section-icon {
  font-size: 3rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.emergency-icon {
  background: white !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.section-info {
  flex: 1;
}

.section-title {
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: var(--font-weight-bold, 700);
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.section-subtitle {
  font-size: var(--font-size-base, 1rem);
  color: #6b7280;
  margin: 0;
}

/* 緊急處理區域 */
.emergency-section {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
}

.emergency-section .section-icon {
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.emergency-section .section-title,
.emergency-section .section-subtitle {
  color: white;
}

.emergency-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.urgent-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.urgent-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
}

.urgent-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  margin-bottom: 1rem;
  color: white;
}

.urgent-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.urgent-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--font-size-sm, 0.875rem);
  line-height: 1.5;
}

.urgent-list li:last-child {
  border-bottom: none;
}

.urgent-list li::before {
  content: '✓';
  margin-right: 0.5rem;
  color: #4ade80;
  font-weight: bold;
}

/* 證據保存區域 */
.evidence-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.evidence-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.checklist-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.checklist-grid {
  display: grid;
  gap: 1rem;
}

.checklist-item {
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.checklist-item:hover {
  border-color: #3b82f6;
  transform: translateX(5px);
}

.checklist-checkbox {
  display: none;
}

.checklist-checkbox:checked + .checklist-label {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.checklist-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checklist-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.checklist-text strong {
  display: block;
  font-weight: var(--font-weight-semibold, 600);
  margin-bottom: 0.25rem;
}

.checklist-text p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.checklist-checkbox:checked + .checklist-label .checklist-text p {
  color: rgba(255, 255, 255, 0.8);
}

.evidence-tips {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 15px;
  padding: 1.5rem;
  height: fit-content;
}

.tips-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #92400e;
  margin-bottom: 1rem;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.tip-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.tip-item p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #92400e;
  margin: 0;
  line-height: 1.5;
}

/* 申訴管道區域 */
.complaint-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.complaint-tabs {
  display: flex;
  background: #f1f5f9;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  gap: 0.5rem;
}

.tab-button {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-weight: var(--font-weight-medium, 500);
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.active {
  background: white;
  color: #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

.complaint-flow {
  margin-bottom: 2rem;
}

.flow-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.flow-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
}

.flow-step {
  min-width: 200px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.flow-step:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold, 700);
  font-size: var(--font-size-sm, 0.875rem);
}

.step-content h4 {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin: 0.5rem 0;
}

.step-content p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  flex-shrink: 0;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .evidence-content {
    grid-template-columns: 1fr;
  }
  
  .flow-steps {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 768px) {
  .response-guide-container {
    padding: 0.5rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: var(--font-size-2xl, 1.5rem);
  }
  
  .hero-stats {
    gap: 1rem;
  }
  
  .stat-item {
    padding: 0.75rem 1rem;
  }
  
  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .section-icon {
    font-size: 2rem;
  }
  
  .emergency-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .quick-nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .complaint-tabs {
    flex-direction: column;
  }
  
  .flow-step {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .quick-nav-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-button {
    padding: 0.75rem;
  }
}

/* 匿名申訴區域 */
.anonymous-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.anonymous-content {
  margin-top: 2rem;
}

.methods-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.method-card {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.method-card:hover {
  border-color: #06b6d4;
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.2);
}

.method-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #06b6d4;
}

.method-title {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.method-description {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.method-pros {
  text-align: left;
}

.pros-title {
  font-weight: var(--font-weight-medium, 500);
  color: #059669;
  font-size: var(--font-size-sm, 0.875rem);
}

.method-pros ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}

.method-pros li {
  font-size: var(--font-size-xs, 0.75rem);
  color: #6b7280;
  padding: 0.25rem 0;
}

.method-pros li::before {
  content: '✓';
  color: #059669;
  margin-right: 0.5rem;
  font-weight: bold;
}

/* 匿名信範本 */
.letter-guide {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
}

.guide-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #92400e;
  margin-bottom: 1.5rem;
}

.letter-template {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.template-header {
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.template-title {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.template-note {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin: 0;
  font-style: italic;
}

.template-section {
  margin-bottom: 1.5rem;
}

.section-label {
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #3b82f6;
  margin-bottom: 0.75rem;
  background: #eff6ff;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
}

.template-text p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #374151;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.template-text ul {
  margin: 0.5rem 0 0 1rem;
}

.template-text li {
  font-size: var(--font-size-sm, 0.875rem);
  color: #374151;
  margin-bottom: 0.25rem;
}

.template-details {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
}

.detail-item {
  display: flex;
  margin-bottom: 0.75rem;
  align-items: flex-start;
  gap: 0.5rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-item strong {
  min-width: 80px;
  color: #1f2937;
  font-size: var(--font-size-sm, 0.875rem);
}

.detail-item span {
  flex: 1;
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  line-height: 1.5;
}

.writing-tips {
  margin-top: 1.5rem;
}

.tips-subtitle {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #92400e;
  margin-bottom: 1rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.tip-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tip-card.important {
  border-left: 4px solid #10b981;
}

.tip-card.avoid {
  border-left: 4px solid #ef4444;
}

.tip-card.protect {
  border-left: 4px solid #8b5cf6;
}

.tip-title {
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  margin-bottom: 0.75rem;
}

.tip-card.important .tip-title {
  color: #059669;
}

.tip-card.avoid .tip-title {
  color: #dc2626;
}

.tip-card.protect .tip-title {
  color: #7c3aed;
}

.tip-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tip-card li {
  font-size: var(--font-size-xs, 0.75rem);
  color: #6b7280;
  padding: 0.25rem 0;
  line-height: 1.4;
}

.tip-card li::before {
  margin-right: 0.5rem;
  font-weight: bold;
}

.tip-card.important li::before {
  content: '✓';
  color: #10b981;
}

.tip-card.avoid li::before {
  content: '✗';
  color: #ef4444;
}

.tip-card.protect li::before {
  content: '🔒';
}

/* 法律權益區域 */
.legal-rights-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.rights-content {
  margin-top: 2rem;
}

.overview-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.right-item {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.right-item:hover {
  border-color: #10b981;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
}

.right-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #10b981;
}

.right-title {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.right-description {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.right-details {
  background: white;
  border-radius: 8px;
  padding: 1rem;
}

.detail-tag {
  display: inline-block;
  background: #dcfce7;
  color: #166534;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: var(--font-size-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  margin-bottom: 0.5rem;
}

.right-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.right-details li {
  font-size: var(--font-size-xs, 0.75rem);
  color: #374151;
  padding: 0.25rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.right-details li:last-child {
  border-bottom: none;
}

.right-details li::before {
  content: '→';
  color: #10b981;
  margin-right: 0.5rem;
  font-weight: bold;
}

/* 法律程序 */
.legal-process {
  margin-top: 2rem;
}

.process-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.process-tabs {
  display: flex;
  background: #f1f5f9;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  gap: 0.5rem;
}

.process-tab {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-weight: var(--font-weight-medium, 500);
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: var(--font-size-sm, 0.875rem);
}

.process-tab.active {
  background: white;
  color: #10b981;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.process-panel {
  display: none;
}

.process-panel.active {
  display: block;
}

.process-subtitle {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

/* 時間軸 */
.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  border-left: 4px solid #10b981;
}

.timeline-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold, 700);
  font-size: var(--font-size-sm, 0.875rem);
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-content h5 {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.timeline-content p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.timeline-duration {
  background: #dcfce7;
  color: #166534;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: var(--font-size-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  margin-left: auto;
  flex-shrink: 0;
}

/* 心理支持區域 */
.support-section {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.support-content {
  margin-top: 2rem;
}

.stages-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.stages-timeline {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 3rem;
}

.stage-item {
  min-width: 180px;
  text-align: center;
  background: #f8fafc;
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.stage-item:hover {
  border-color: #f59e0b;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
}

.stage-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.stage-content h4 {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.stage-content p {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.stage-tip {
  font-size: var(--font-size-xs, 0.75rem);
  color: #f59e0b;
  font-weight: var(--font-weight-medium, 500);
  background: #fef3c7;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.stage-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  flex-shrink: 0;
}

.resources-title {
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.resource-card.therapy:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
}

.resource-card.support-group:hover {
  border-color: #8b5cf6;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
}

.resource-card.self-care:hover {
  border-color: #10b981;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
}

.resource-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.resource-card.therapy .resource-icon {
  color: #3b82f6;
}

.resource-card.support-group .resource-icon {
  color: #8b5cf6;
}

.resource-card.self-care .resource-icon {
  color: #10b981;
}

.resource-title {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.resource-description {
  font-size: var(--font-size-sm, 0.875rem);
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.resource-content {
  background: white;
  border-radius: 8px;
  padding: 1rem;
}

.resource-options .option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.resource-options .option:last-child {
  border-bottom: none;
}

.resource-options strong {
  font-size: var(--font-size-sm, 0.875rem);
  color: #1f2937;
}

.resource-options span {
  font-size: var(--font-size-xs, 0.75rem);
  color: #6b7280;
}

.resource-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resource-benefits li {
  font-size: var(--font-size-sm, 0.875rem);
  color: #374151;
  padding: 0.25rem 0;
}

.resource-benefits li::before {
  content: '✓';
  color: #8b5cf6;
  margin-right: 0.5rem;
  font-weight: bold;
}

.self-care-tips .care-category {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: #f0fdf4;
  border-radius: 6px;
}

.self-care-tips strong {
  font-size: var(--font-size-sm, 0.875rem);
  color: #166534;
  margin-bottom: 0.25rem;
}

.self-care-tips span {
  font-size: var(--font-size-xs, 0.75rem);
  color: #374151;
  line-height: 1.4;
}

/* 24小時支援專線 */
.hotline-section {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-radius: 20px;
  margin-bottom: 3rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
}

.hotline-banner {
  padding: 2rem;
  color: white;
}

.banner-content {
  text-align: center;
  margin-bottom: 2rem;
}

.banner-title {
  font-size: var(--font-size-xl, 1.25rem);
  font-weight: var(--font-weight-bold, 700);
  margin-bottom: 0.5rem;
  color: white;
}

.banner-subtitle {
  font-size: var(--font-size-base, 1rem);
  opacity: 0.9;
  margin: 0;
}

.hotline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.hotline-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.hotline-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.hotline-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hotline-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.hotline-info {
  flex: 1;
}

.hotline-title {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: white;
  margin: 0 0 0.75rem 0;
}

.hotline-numbers {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.number-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.number-item .number {
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-bold, 700);
  color: white;
}

.number-item .description {
  font-size: var(--font-size-xs, 0.75rem);
  color: rgba(255, 255, 255, 0.8);
}

/* 返回按鈕 */
.back-section {
  text-align: center;
  margin-top: 3rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: var(--font-size-base, 1rem);
  font-weight: var(--font-weight-medium, 500);
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  color: white;
}

/* 更多響應式調整 */
@media (max-width: 1024px) {
  .stages-timeline {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stage-arrow {
    transform: rotate(90deg);
  }
  
  .stage-item {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .methods-grid,
  .resources-grid,
  .hotline-grid {
    grid-template-columns: 1fr;
  }
  
  .process-tabs {
    flex-direction: column;
  }
  
  .timeline-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .timeline-duration {
    margin-left: 0;
  }
  
  .hotline-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .tip-card {
    padding: 0.75rem;
  }
  
  .template-section {
    margin-bottom: 1rem;
  }
  
  .detail-item {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .detail-item strong {
    min-width: auto;
  }
}

/* 平滑滾動和交互效果 */
html {
  scroll-behavior: smooth;
}

.nav-button:focus,
.tab-button:focus,
.process-tab:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* 打印樣式 */
@media print {
  .quick-nav-section,
  .back-section {
    display: none;
  }
  
  .hero-section {
    background: white !important;
    color: black !important;
  }
  
  .emergency-section,
  .hotline-section {
    background: #f3f4f6 !important;
    color: black !important;
  }
}
</style>