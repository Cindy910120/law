<template>
  <LawArticleDisplay 
    page-title="職業災害補償" 
    :articles="occupationalHazardsArticles" 
  />
</template>

<script setup lang="ts">
import { occupationalHazardsArticles } from '~/data/occupational-hazards';
</script>

