<template>
  <LawArticleDisplay 
    page-title="性騷擾防治法" 
    :articles="HarassmentPreventionLawArticles" 
  >
    <template #back-button>
      <div class="back-section">
        <NuxtLink to="/labor-law/sexual-harassment-prevention" class="back-button">
          ← 返回性騷擾防治專區
        </NuxtLink>
      </div>
    </template>
  </LawArticleDisplay>
</template>

<script setup lang="ts">
import { HarassmentPreventionLawArticles } from '~/data/harassment-prevention-law';
</script>

<style scoped>
/* 返回按鈕樣式 */
.back-section {
  text-align: center;
  margin-top: 3rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #3b82f6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  background: #1d4ed8;
  color: white;
}
</style>