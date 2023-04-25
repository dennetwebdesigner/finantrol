<template>
  <font-awesome-icon
    icon="bars"
    class="bg-white p-2 text-4xl mr-2 absolute left-2 top-[69%]"
    @click="handleShowMenu"
  />

  <section
    :class="`${show} absolute left-0 top-0 w-full h-screen z-20 bg-white p-3 `"
  >
    <font-awesome-icon
      icon="circle-xmark"
      class="text-4xl mr-2 absolute right-3 top-3"
      @click="closedMenu"
    />
    <h2 class="text-2xl mb-8">Finantrol</h2>
    <article class="p-3 text-3xl font-sans border-b-2" @click="goInit">
      Inicio
    </article>
    <article class="p-3 text-3xl font-sans border-b-2" @click="addService">
      Adicionar
    </article>
    <article class="p-3 text-3xl font-sans border-b-2">Relatorios</article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../routes";
const show = ref<string>("hidden");
const emit = defineEmits(["addService"]);

const goInit = () => {
  router.push("/");
  closedMenu();
};
const addService = () => {
  emit("addService", null);
  closedMenu();
};

const handleShowMenu = () => {
  show.value = "block";
};

const closedMenu = () => {
  show.value = "hidden";
};
</script>
