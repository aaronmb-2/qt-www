<template>
    <div class="flex h-screen">
      <div class="flex flex-1 flex-col">
        <NuxtLink 
        :to="localePath('/home')"
        class="mt-2 ml-2"
        aria-label="Home">
        ← {{ $t('login.home') }}
        </NuxtLink>
        <div class=""></div>
        <div class="flex flex-col flex-1 justify-center mx-auto w-full max-w-sm lg:w-96 py-52 px-4 lg:flex-none">
          <div>
            <NuxtLink 
                :to="localePath('/home')" 
                aria-label="Home">
                <BaseLogo class="w-auto h-10" />
            </NuxtLink>
            <h2 class="mt-6 text-3xl font-bold tracking-tight">{{ $t('login.up_to_date') }}</h2>
          </div>
          <div class="mt-8">
            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium leading-6">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required="true" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                <BaseButton :button-theme="themeButtonService.getThemeButtonById(6)" class="font-bold">
                    {{ $t('login.keep_me_posted') }}
                </BaseButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
      </div>
    </div>
  </template>

<script lang="ts" setup>
import { themeButtonService } from "~/services/theme/ThemeButtonService";

import BaseLogo from "~/components/base/BaseLogo.vue"

definePageMeta({
  layout: "auth",
});

const localePath = useLocalePath()
</script>