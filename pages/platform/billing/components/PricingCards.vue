<template>
    <Observer>
    <div
      class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3"
    >
      <PricingBackground />
      <div
        v-for="product in productsService.products"
        :key="product.id"
        :class="[
          product.featured
            ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
            : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
          'relative rounded-2xl',
        ]"
      >
        <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
          <h3
            :class="[
              product.featured ? 'text-gray-900' : 'text-white',
              'text-sm font-semibold leading-6',
            ]"
          >
            {{ $t(product.name) }}
          </h3>
          <div
            class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
          >
            <div class="mt-2 flex items-center gap-x-4">
              <p
                :class="[
                  product.featured ? 'text-gray-900' : 'text-white',
                  'text-4xl font-bold tracking-tight',
                ]"
              >
                {{
                  product.getPriceForInterval(
                    productsService.getInterval().value
                  )
                }}
              </p>
              <div class="text-sm leading-5">
                <p :class="product.featured ? 'text-gray-900' : 'text-white'">USD</p>
                <p :class="product.featured ? 'text-gray-500' : 'text-gray-400'">
                  {{
                    $t("pricing.payment") +
                    " " +
                    $t(productsService.getInterval().label)
                  }}
                </p>
              </div>
            </div>
            <button
              @click="createStripeCheckoutSession(product.getPriceIdForInterval(productsService.getInterval().value))"
              :class="[
                product.featured
                  ? 'bg-blue-900 dark:bg-blue-700 shadow-sm hover:bg-pink-500 dark:hover:bg-pink-400 focus-visible:outline-indigo-600'
                  : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
              ]"
              aria-label="Home"
            >
              <svg v-if="submitInProgress" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
              {{ $t("pricing.buy_plan") }}
          </button>
          </div>
          <div class="mt-8 flow-root sm:mt-10">
            <ul
              role="list"
              :class="[
                product.featured
                  ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                  : 'divide-white/5 border-white/5 text-white',
                '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0',
              ]"
            >
              <li
                v-for="usp in product.uniqueSellingPoints"
                :key="usp.id"
                class="flex gap-x-3 py-2"
              >
                <CheckIcon
                  :class="[
                    product.featured ? 'text-indigo-600' : 'text-gray-500',
                    'h-6 w-5 flex-none',
                  ]"
                  aria-hidden="true"
                />
                {{ usp.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Observer>
  </template>
  
  <script setup lang="ts">
  import { CheckIcon } from "@heroicons/vue/20/solid";
  import { Observer } from "mobx-vue-lite";
  
  import PricingBackground from "./PricingBackground.vue";
  import { productsService } from "~/services/subscription/ProductsService";
  import { apiResponseHandlerService } from "~/services/response/ApiResponseHandlerService";
  import { EApiResponseStatus } from "~/services/response/EApiResponseHandler";
  import { ToastMessage } from "~/models/response/ToastMessage";
  import { toastMessageService } from "~/services/response/ToastMessageService";

  const { localeProperties } = useI18n();

  const submitInProgress = ref(false)

  async function createStripeCheckoutSession(priceId: string | number) {
    submitInProgress.value = true

    const response = await productsService.getStripeCheckout({
      locale: localeProperties.value.iso!,
      paramPriceId: priceId
    })
    submitInProgress.value = false

    const message = apiResponseHandlerService.handleResponse(response)

    // Unable to create a Stripe session
    if (message.status !== EApiResponseStatus.success) {
      toastMessageService.addToast(
        new ToastMessage({ id: Math.random(), title: message.title, message: message.message, status: message.status})
      );
      if (response.error.value!.status === 401 || response.error.value!.status === 403 ) {
        return navigateTo({
          path: localePath('/auth/login'),
        });
      }
      return;
    }

    // Redirect user to Stripe Checkout page
    navigateTo(response.data.value["checkout_session_url"], { external: true })
  }
  
  const localePath = useLocalePath();
  </script>
  