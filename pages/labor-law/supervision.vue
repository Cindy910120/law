<template>
  <LawArticleDisplay 
    page-title="監督與檢查" 
    :articles="supervisionArticles" 
  />
</template>

<script setup lang="ts">
import { supervisionArticles } from '~/data/supervision';
</script>

