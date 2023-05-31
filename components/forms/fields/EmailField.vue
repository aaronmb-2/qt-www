<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-6">{{
      $t("global.fields.email_address")
    }}</label>
    <div class="mt-1">
      <Field
        name="email"
        type="email"
        autocomplete="email"
        class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
      />
      <ErrorMessage
        name="email"
        as="p"
        class="dark:text-pink-200 text-pink-400"
      />
    </div>
  </div>
</template>
