<template>
  <section class="in-web-ext w-full relative font-sans leading-1em rounded-xl bg-white my-5 border border-solid border-gray-200">
    <UserCard v-if="user" :user="user" />
    <p v-else>
      No data...
    </p>
  </section>
</template>

<script setup lang="ts">
import { useUserService } from '/composables/useUserService'

const { user } = useUserService()
</script>
