<template>
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight">FAQ</h2>
        <dl class="mt-10 space-y-6 divide-y divide-slate-900/10 dark:divide-slate-300">
        <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
            <DisclosureButton class="flex w-full items-start justify-between text-left">
                <span class="text-base font-bold leading-7">{{ $t(faq.question) }}</span>
                <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
            </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="font-light">{{ $t(faq.answer) }}</p>
            </DisclosurePanel>
        </Disclosure>
        </dl>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
    {
      question: "home.faq.1.q",
      answer:
        "home.faq.1.a",
    },
    {
      question: "home.faq.2.q",
      answer:
        "home.faq.2.a",
    },
    {
      question: "home.faq.3.q",
      answer:
        "home.faq.3.a",
    },
    {
      question: "home.faq.4.q",
      answer:
        "home.faq.4.a",
    },
    {
      question: "home.faq.5.q",
      answer:
        "home.faq.5.a",
    },
    {
      question: "home.faq.6.q",
      answer:
        "home.faq.6.a",
    },
    {
      question: "home.faq.7.q",
      answer:
        "home.faq.7.a",
    },
    {
      question: "home.faq.8.q",
      answer:
        "home.faq.8.a",
    },
  ]
  </script>