<template>
    <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div class="max-w-xl lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ $t("home.newsletter_leading_text") }}</h2>
            <p class="mt-4 text-lg leading-8">{{ $t("home.newsletter_helper_text") }}</p>
            <div class="mt-6 flex max-w-md gap-x-4">
              <NewsletterSubscribeForm />
            </div>
          </div>
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon class="h-6 w-6" aria-hidden="true" />
              </div>
              <dt class="mt-4 font-semibold">{{ $t("home.newsletter_leading_text_weekly") }}</dt>
              <dd class="mt-2 leading-7">{{ $t("home.newsletter_helper_text_weekly") }}</dd>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon class="h-6 w-6" aria-hidden="true" />
              </div>
              <dt class="mt-4 font-semibold">{{ $t("home.newsletter_leading_text_spam") }}</dt>
              <dd class="mt-2 leading-7">{{ $t("home.newsletter_helper_text_spam") }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"> 
  import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'

  import NewsletterSubscribeForm from '~/components/forms/NewsletterSubscribeForm.vue';
  </script>