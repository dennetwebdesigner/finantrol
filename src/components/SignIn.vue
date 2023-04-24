<template>
  <form
    @submit="handleSubmit"
    :class="`w-full h-screen ${hasAuth} flex-wrap items-start pt-5 p-2 absolute top-0 left-0 bg-slate-50 z-10`"
  >
    <div class="flex flex-wrap w-full justify-between relative mt-8">
      <h2 class="text-2xl font-bold text-slate-400">Realize o Login</h2>
      <input
        type="text"
        placeholder="Email"
        name="email"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        class="w-full h-16 shadow-lg mb-4 p-2 text-xl"
      />
      <button
        type="submit"
        class="w-3/6 absolute right-3 bottom-[-60px] bg-orange-400 h-12 rounded-md text-white text-2xl"
      >
        Entrar
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { auth } from "@/config/firabase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const hasAuth = ref<string>("flex");

const handleSubmit = async (e: any) => {
  e.preventDefault();
  const email = e.target.elements.email;
  const password = e.target.elements.password;

  if (email.value.length < 1 || password.value.length < 1) {
    alert("campos precisam ser preenchidos!");
    return;
  }

  try {
    const data = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    if (data) {
      hasAuth.value = "hidden";
    }
  } catch (e) {
    console.error("Error authenticate: ", e);
  }
};
</script>
