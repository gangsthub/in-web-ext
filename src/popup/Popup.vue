<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Linkedin Web Ext</div>
    <p class="mt-2 opacity-50">
      This is the popup page
    </p>
    <button class="btn mt-5" @click="openOptionsPage">
      Open Options
    </button>
    <div class="mt-2"></div>
  </main>
</template>

<script setup lang="ts">
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>
