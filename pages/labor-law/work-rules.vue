<template>
  <LawArticleDisplay 
    page-title="工作規則" 
    :articles="ruleArticles" 
  />
</template>

<script setup lang="ts">
import { ruleArticles } from '~/data/work-rules';
</script>

