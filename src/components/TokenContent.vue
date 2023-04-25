<template>
  <div @click="sendInfo" class="w-full flex flex-wrap">
    <h3 class="w-6/12 text-xl">
      {{ token.client }}
    </h3>
    <p class="w-6/12">
      Realizado em: <span class="text-right">{{ token.created_at }}</span>
    </p>
    <p class="w-6/12">{{ token.contact_type }}: {{ token.contact }}</p>
    <p class="w-6/12">
      R$ {{ parseFloat(token.cash).toFixed(2).replace(".", ",") }} em
      <span class="font-bold text-lg text-purple-500 text-right">
        {{ token.type }}
      </span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { iToken } from "@/interfaces/TokensService";
const { token } = defineProps<{ token: iToken }>();

const emit = defineEmits(["sendInfoToken"]);

const sendInfo = () => {
  emit("sendInfoToken", token);
};
</script>
