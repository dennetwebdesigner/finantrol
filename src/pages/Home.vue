<template>
  <main class="w-full flex flex-wrap justify-center">
    <div class="w-full p-2">
      <input
        type="text"
        class="w-full h-12 p-2 text-lg"
        placeholder="pesquizar por serviço especifico "
      />
    </div>
    <section class="w-full p-1">
      <article v-for="token in tokens" class="flex flex-wrap mb-2 p-1">
        <h3 class="w-6/12 text-xl">
          {{ token.client }}
        </h3>
        <p class="w-6/12">
          Realizado em: <span class="text-right">{{ token.created_at }}</span>
        </p>
        <p class="w-6/12">{{ token.contact_type }}: {{ token.contact }}</p>
        <p class="w-6/12">
          Pagamento em
          <span class="font-bold text-lg text-yellow-500 text-right">
            {{ token.type }}
          </span>
        </p>
      </article>
    </section>
    <form class=""></form>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

type iToke = {
  client: string;
  created_at: string;
  contact_type: string;
  contact: string;
  type: string;
};

const tokens = ref<iToke[]>([]);
onMounted(() => {
  for (let index = 0; index < 10; index++) {
    tokens.value.push({
      client: "client" + index,
      created_at: `13/04/2023`,
      contact_type: "insta",
      contact: "@client_" + index,
      type: "pix",
    });
  }
});
</script>
