<template>
  <LawArticleDisplay 
    page-title="退休" 
    :articles="retirementArticles" 
  />
</template>

<script setup lang="ts">
import { retirementArticles } from '~/data/retirementData';
</script>

