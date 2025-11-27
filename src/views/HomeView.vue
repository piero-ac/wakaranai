<script setup lang="ts">
import { useConvexQuery } from 'convex-vue'
import { api } from '../../convex/_generated/api'

const { data, isPending } = useConvexQuery(api.kanji.get)
</script>
<template>
  HomeView
  <h1>Kanji</h1>
  <span v-if="isPending"> Loading... </span>
  <ul v-else>
    <li v-for="kanji in data" :key="kanji._id">{{ kanji.character }} {{ kanji.level }}</li>
  </ul>
</template>
