<template>
  <form
    @submit="handleSubmit"
    :class="`w-full h-screen ${props.modalAddService} flex-wrap items-start pt-5 p-2 absolute top-0 left-0 bg-slate-50`"
  >
    <div class="flex flex-wrap w-full justify-between relative mt-8">
      <h2 class="text-2xl font-bold text-slate-400">Serviço Realizado</h2>
      <font-awesome-icon
        icon="circle-xmark"
        class="text-4xl mr-2"
        @click="closeModal"
      />
      <input
        type="text"
        placeholder="Nome do Cliente"
        name="client"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />

      <select
        name="contact_type"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      >
        <option value="Whatsapp">Whatsapp</option>
        <option value="Instagram">Instagram</option>
        <option value="Telefone">Telefone</option>
        <option value="Email">Email</option>
        <option value="Facebook">Facebook</option>
        <option value="Linkedin">linkedin</option>
      </select>
      <input
        type="text"
        placeholder="Contato"
        name="contact"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />
      <input
        type="date"
        name="date"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />
      <select name="type" class="w-full h-16 shadow-lg mb-4 p-2 text-xl">
        <option value="pix">Pix</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Crédito">Crédito</option>
        <option value="Debito">Débito</option>
      </select>
      <input
        type="text"
        placeholder="A quem pagou"
        name="how"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />
      <button
        type="submit"
        class="w-3/6 absolute right-3 bottom-[-60px] bg-orange-400 h-12 rounded-md text-white text-2xl"
      >
        Adicionar
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { db } from "@/config/firabase";
import { collection, addDoc } from "firebase/firestore/lite";

const props = defineProps<{ modalAddService: string }>();
const emit = defineEmits(["closedModal"]);

const closeModal = (e: any) => {
  emit("closedModal", e);
};

const handleSubmit = async (e: any) => {
  e.preventDefault();
  const client = e.target.elements.client;
  const contact_type = e.target.elements.contact_type;
  const contact = e.target.elements.contact;
  const type = e.target.elements.type;
  const how = e.target.elements.how;
  const date = e.target.elements.date;

  if (
    client.value.length < 1 ||
    contact_type.value.length < 1 ||
    contact.value.length < 1 ||
    type.value.length < 1 ||
    how.value.length < 1 ||
    date.value.length < 1
  ) {
    alert("campos precisam ser preenchidos!");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "Services"), {
      client: client.value,
      contact_type: contact_type.value,
      contact: contact.value,
      type: type.value,
      how: how.value,
      created_at: date.value,
    });
    alert("Criado com sucesso!");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
