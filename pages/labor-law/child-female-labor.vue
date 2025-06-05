<template>
  <LawArticleDisplay 
    page-title="童工、女工" 
    :articles="childFemaleLaborArticles" 
  />
</template>

<script setup lang="ts">
import { childFemaleLaborArticles } from '~/data/child-female-labor';
</script>