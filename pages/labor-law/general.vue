<template>
  <LawArticleDisplay 
    page-title="總則" 
    :articles="generalArticles" 
  />
</template>

<script setup lang="ts">
import { generalArticles } from '~/data/generalData';
</script>

