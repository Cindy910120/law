<template>
  <LawArticleDisplay 
    page-title="勞動契約" 
    :articles="contractArticles" 
  />
</template>

<script setup lang="ts">
import { contractArticles } from '~/data/contractData';
</script>

