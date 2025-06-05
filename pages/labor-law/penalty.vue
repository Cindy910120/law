<template>
  <LawArticleDisplay 
    page-title="罰則" 
    :articles="penaltyArticles" 
  />
</template>

<script setup lang="ts">
import { penaltyArticles } from '~/data/penalty';
</script>

