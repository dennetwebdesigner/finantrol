<template>
  <article
    v-for="token in tokens"
    class="flex flex-wrap mb-2 border-sort shadow-md p-2"
  >
    <TokenContent :token="token" />
  </article>
</template>

<style scoped>
.border-sort:nth-child(even) {
  border-left: 4px solid purple;
}

.border-sort:nth-child(odd) {
  border-left: 4px solid pink;
}
</style>

<script lang="ts" setup>
import { iToken } from "@/interfaces/TokensService";
import TokenContent from "./TokenContent.vue";
const { tokens } = defineProps<{ tokens: iToken[] }>();
</script>
