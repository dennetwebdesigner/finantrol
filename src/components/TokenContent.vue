<template>
  <h3 class="w-6/12 text-xl">
    {{ token.client }}
  </h3>
  <p class="w-6/12">
    Realizado em: <span class="text-right">{{ token.created_at }}</span>
  </p>
  <p class="w-6/12">{{ token.contact_type }}: {{ token.contact }}</p>
  <p class="w-6/12">
    Pagamento em
    <span class="font-bold text-lg text-purple-500 text-right">
      {{ token.type }}
    </span>
  </p>
</template>
<script lang="ts" setup>
import { iToken } from "@/interfaces/TokensService";
const { token } = defineProps<{ token: iToken }>();
</script>
