<template>  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">關於本站</h3>
        <p class="footer-text">這是林芊蓉的期末專題。</p>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">聯絡資訊</h3>
        <p class="footer-text">電子郵件：cindyjuliacoco@gmail.com</p>
        <p class="footer-text">個人網站：<a href="" target="_blank" class="footer-link">林芊蓉的個人網站</a></p>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">相關連結</h3>
        <ul>
          <li><a href="/" class="footer-link">首頁</a></li>
          <li><a href="/project" class="footer-link">期末專題</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; {{ new Date().getFullYear() }} 林芊蓉. 版權所有。</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: var(--theme-footer, #f8f9fa);
  color: var(--theme-text, #333);
  padding: 2.5rem 0 0 0;
  margin-top: 3rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  font-family: "LXGW WenKai Mono TC", monospace;
  transition: background 0.3s ease, color 0.3s ease;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-bottom {
  text-align: center;
  padding: 1.5rem 0;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
}
</style>