<template>
  <LawArticleDisplay 
    page-title="性騷擾防治區" 
    :articles="sexualHarassmentPreventionArticles"
  />
</template>

<script setup lang="ts">
import { sexualHarassmentPreventionArticles } from '~/data/sexual-harassment-prevention.ts';
</script>

<style scoped>
/* 可添加專區特定樣式 */
</style>
