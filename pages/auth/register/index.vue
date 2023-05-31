<template>
  <div class="flex h-screen">
    <div class="flex flex-1 flex-col overflow-auto">
      <ButtonHome />
      <div class=""></div>
      <div
        class="flex flex-col flex-1 justify-center mx-auto w-full max-w-sm lg:w-96 py-16 md:py-32 px-4 lg:flex-none"
      >
        <FormActionsHeader />
        <div class="mt-6">
          <UserRegisterForm />
        </div>
        <FormActionsFooter />
      </div>
    </div>
    <PageImage />
  </div>
</template>

<script lang="ts" setup>
import ButtonHome from "./../components/ButtonHome.vue";
import FormActionsFooter from "./../components/FormActionsFooter.vue";
import PageImage from "./../components/PageImage.vue";
import FormActionsHeader from "./components/FormActionsHeader.vue";

import UserRegisterForm from "~/components/forms/UserRegisterForm.vue";

definePageMeta({
  layout: "auth",
});
</script>
