<template>
  <ShowDetails
    :token="detailsToken"
    v-on:clear-details="(e:null) => detailsToken = e "
  />
  <article
    v-for="token in tokens"
    class="flex flex-wrap mb-2 border-sort shadow-md p-2"
  >
    <TokenContent
      :token="token"
      v-on:send-info-token="(e:iToken) => {
      detailsToken = e
    }"
    />
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
import { ref } from "vue";
import TokenContent from "./TokenContent.vue";
import ShowDetails from "@/components/ShowDetails.vue";

const detailsToken = ref<iToken | null>(null);

const { tokens } = defineProps<{ tokens: iToken[] }>();
</script>
