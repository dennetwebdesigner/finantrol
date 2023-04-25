<template>
  <section
    :class="`${show}  absolute left-0 top-0 w-full h-screen  bg-white transition`"
  >
    <font-awesome-icon
      icon="circle-xmark"
      class="text-4xl mr-2 absolute right-3 top-3"
      @click="closed"
    />
    <h2
      class="w-full h-16 pt-3 pl-3 text-3xl bg-purple-400 font-semibold font-sans text-purple-700"
    >
      Detalhes do Serviço
    </h2>

    <section class="mt-3">
      <p class="p-2 text-xl">
        <span class="font-bold">Nome:</span> {{ props.token?.client }}
      </p>
      <p class="p-2 text-xl">
        <span class="font-bold">Realizado em:</span>
        {{ props.token?.created_at.split("-").reverse().join("/") }}
      </p>
      <p class="p-2 text-xl">
        <span class="font-bold">{{ props.token?.contact_type }}:</span>
        {{ props.token?.contact }}
      </p>
      <p class="p-2 text-xl">
        <span class="font-bold">Valor:</span>
        R$
        {{
          token?.cash ? parseFloat(token?.cash).toFixed(2).replace(".", ",") : 0
        }}
      </p>
      <p class="p-2 text-xl">
        <span class="font-bold">Tipo de pagamento:</span>
        {{ props.token?.type }}
      </p>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { iToken } from "@/interfaces/TokensService";
import { ref, watch } from "vue";
const props = defineProps<{ token: iToken | null }>();
const emit = defineEmits(["clearDetails"]);
watch(
  () => props.token,
  () => {
    console.log(props.token);
    if (props.token != null) show.value = "translate-x-0";
    else show.value = "translate-x-[-100%]";
  }
);
const show = ref<string>("translate-x-[-100%]");
const closed = () => {
  emit("clearDetails", null);
  show.value = "translate-x-[-100%]";
};
</script>
