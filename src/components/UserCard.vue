<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
    }),
  },
})
</script>

<template>
  <div v-if="user" class="flex w-full px-9 ">
    <div class="grid place-content-center">
      <img v-if="user.picture" class="rounded-full border border-light-100" :src="user.picture.medium" alt="" />
    </div>
    <div class="p-4">
      <h2 v-if="user.name">
        {{ user.name.first }} {{ user.name.last }}
      </h2>
      <p v-if="user.location && user.location.city" class="text-md text-gray-700">
        <mdi-map-marker class="inline-block align-middle text-gray-500" />
        <em class="pl-3">{{ user.location.city }}</em>
      </p>
      <p v-if="user.email" class="mt-2">
        <mdi-mail class="inline-block align-middle text-gray-500" />
        <a class="pl-3 text-blue-500 hover:text-blue-400 no-underline" :href="`mailto:${user.email}`">{{ user.email }}</a>
      </p>
      <p v-if="user.phone" class="mt-2">
        <mdi-phone class="inline-block align-middle text-gray-500" />
        <a class="pl-3 text-blue-500 hover:text-blue-400 no-underline" :href="`tel:${user.phone}`">{{ user.phone }}</a>
      </p>
    </div>
  </div>
</template>
