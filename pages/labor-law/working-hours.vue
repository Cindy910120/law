<template>
  <LawArticleDisplay 
    page-title="工作時間、休息、休假" 
    :articles="workingHoursArticles" 
  />
</template>

<script setup lang="ts">
import { workingHoursArticles } from '~/data/working-hoursData';
</script>
