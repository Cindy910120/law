<template>
  <LawArticleDisplay 
    page-title="工資" 
    :articles="wageArticles" 
  />
</template>

<script setup lang="ts">
import { wageArticles } from '@/data/wageData';
</script>

