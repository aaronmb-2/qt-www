<template>
    <div class="relative isolate overflow-hidden">
      <svg viewBox="0 0 1108 632" aria-hidden="true" class="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
        <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fill-opacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z" />
        <defs>
          <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
            <stop stop-color="#f9a8d4" />
            <stop offset="1" stop-color="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 class="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">{{ $t('home.image_leading_text') }}</h1>
          <p class="mt-6 text-lg leading-8 text-slate-500">{{ $t('home.image_helper_text') }}</p>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img src="@/assets/images/trading-app.png" alt="App screenshot" width="2432" height="960" class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 w-auto h-49" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>