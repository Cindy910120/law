<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useColorTheme } from '~/composables/useColorTheme'
import { onMounted } from 'vue'

const { initializeTheme } = useColorTheme()

onMounted(() => {
  initializeTheme()
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: "LXGW WenKai Mono TC", monospace;
  line-height: 1.6;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
