<template>
  <LawArticleDisplay 
    page-title="附則" 
    :articles="supplementaryArticles" 
  />
</template>

<script setup lang="ts">
import { supplementaryArticles } from '~/data/supplementary';
</script>

