<template>
  <SignIn v-if="!hasLogin" />
  <main class="w-full flex flex-wrap justify-center items-center">
    <AddService
      :modal-add-service="modalAddService"
      v-on:closed-modal="
        () => {
          modalAddService = 'hidden';
        }
      "
    />
    <div class="w-full flex items-center bg-purple-400 relative h-20 mb-3">
      <h1 class="text-center text-slate-50 m-auto text-2xl mt-4 font-semibold">
        Serviços Realizados
      </h1>
      <Menu
        v-on:add-service="
          () => {
            modalAddService = 'flex';
          }
        "
      />
      <input
        type="text"
        class="w-10/12 h-12 p-2 text-lg shadow-md border-1 border-slate-400 absolute right-2 top-[67%]"
        placeholder="pesquizar por serviço especifico "
        @keydown="searchService"
      />
    </div>
    <section class="w-full p-1 mt-5">
      <tokenContainer :tokens="tokens" />
    </section>
    <form class=""></form>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { iToken } from "../interfaces/TokensService";
import { tokenGetServices } from "../services/tokens/tokenGetService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firabase";

import tokenContainer from "@/components/tokenContainer.vue";
import SignIn from "@/components/SignIn.vue";
import AddService from "@/components/AddService.vue";
import Menu from "@/components/Menu.vue";
const hasLogin = ref<boolean>(false);
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (uid) hasLogin.value = true;
    } else {
      hasLogin.value = false;
    }
  });
});
</script>
