<template>
  <article
    v-for="token in tokens"
    class="flex flex-wrap mb-2 border-1 border-slate-400 shadow-md p-2"
  >
    <TokenContent :token="token" />
  </article>
</template>

<script lang="ts" setup>
import { iToken } from "@/interfaces/TokensService";
import TokenContent from "./TokenContent.vue";
const { tokens } = defineProps<{ tokens: iToken[] }>();
</script>
