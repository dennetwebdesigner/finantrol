<template>
  <main class="w-full flex flex-wrap justify-center p-2 items-center">
    <AddService
      :modal-add-service="modalAddService"
      v-on:closed-modal="
        () => {
          modalAddService = 'hidden';
        }
      "
    />
    <font-awesome-icon
      icon="circle-plus"
      class="text-4xl mr-2"
      @click="
        () => {
          modalAddService = 'flex';
        }
      "
    />
    <input
      type="text"
      class="grow h-12 p-2 text-lg shadow-md border-1 border-slate-400"
      placeholder="pesquizar por serviço especifico"
      @keydown="searchService"
    />
    <section class="w-full p-1 mt-5">
      <article
        v-for="token in tokens"
        class="flex flex-wrap mb-2 border-1 border-slate-400 shadow-md p-2"
      >
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
import { iToken } from "../interfaces/TokensService";
import { tokenGetServices } from "../services/tokens/tokenGetService";
import AddService from "@/components/AddService.vue";
const tokens = ref<iToken[]>([]);
const tokensSearch = ref<iToken[]>([]);
const modalAddService = ref<string>("hidden");
let timerSearch: any = null;
const searchService = (e: any) => {
  clearTimeout(timerSearch);
  timerSearch = setTimeout(async () => {
    if (e.target.value == "") {
      tokens.value = tokensSearch.value;
      return;
    }

    tokensSearch.value = (await await tokenGetServices()) as any as iToken[];

    const byName: iToken[] = tokensSearch.value.filter((t: iToken) => {
      return t.client.toLowerCase().includes(e.target.value.toLowerCase());
    });

    const byType: iToken[] = tokensSearch.value.filter((t: iToken) => {
      return t.type.toLowerCase().includes(e.target.value.toLowerCase());
    });

    const byContact: iToken[] = tokensSearch.value.filter((t: iToken) => {
      return t.contact.toLowerCase().includes(e.target.value.toLowerCase());
    });

    const byContactType: iToken[] = tokensSearch.value.filter((t: iToken) => {
      return t.contact_type
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    const all: iToken[] = [
      ...byName,
      ...byContact,
      ...byContactType,
      ...byType,
    ];
    const setPerson = new Set();

    tokens.value = all.filter((t: iToken) => {
      const duplicatedPerson = setPerson.has(t.id);
      setPerson.add(t.id);
      return !duplicatedPerson;
    });
  }, 600);
};

onMounted(async () => {
  tokens.value = await tokenGetServices();
});
</script>
