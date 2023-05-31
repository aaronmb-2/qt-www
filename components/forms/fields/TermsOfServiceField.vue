<template>
  <div>
    <Field
      v-slot="{ field }"
      name="terms_of_service"
      type="checkbox"
      label="terms_of_service"
      :value="true"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="terms_of_service"
            v-bind="field"
            :value="true"
            name="terms_of_service"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            for="terms_of_service"
            class="ml-3 block text-sm leading-6 text-gray-700"
            >{{ $t("global.fields.accepts_terms") }}</label
          >
        </div>

        <div class="text-sm leading-6">
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >{{ $t("global.fields.download_terms") }}</a
          >
        </div>
      </div>
    </Field>
    <ErrorMessage
      name="terms_of_service"
      as="p"
      class="dark:text-pink-200 text-pink-400"
    />
  </div>
</template>
