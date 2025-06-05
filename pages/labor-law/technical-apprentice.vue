<template>
  <LawArticleDisplay 
    page-title="技術生" 
    :articles="technicalApprentice" 
  />
</template>

<script setup lang="ts">
import { technicalApprentice } from '~/data/technical-apprentice';
</script>

