<template>
  <Observer>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div
        v-if="toastMessageService.toastMessageQueueLength"
        class="flex w-full flex-col items-center space-y-4 sm:items-end"
      >
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <TransitionGroup
          key="toast-messages"
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transform ease-in duration-300 transition"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-full opacity-0"
        >
          <div
            v-for="message in toastMessageService.displayToastMessages"
            :key="message.title"
            class="dark:bg-slate-700 pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 ring-black ring-opacity-5 drop-shadow-2xl shadow-lg"
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <component
                    :is="message.icon"
                    v-if="message.icon"
                    :class="[message.styling, 'h-6 w-6']"
                  />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p
                    class="text-sm font-medium dark:text-slate-300 text-slate-900"
                  >
                    {{ $t(message.title) }}
                  </p>
                  <p class="mt-1 text-sm dark:text-slate-500 text-slate-700">
                    {{ $t(message.message) }}
                  </p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    @click="toastMessageService.removeToast(message.id)"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon
                      class="h-5 w-5 dark:bg-slate-700 dark:text-slate-300 dark:text-slate-300 text-slate-900"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </Observer>
</template>

<script setup>
import { Observer } from "mobx-vue-lite";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { toastMessageService } from "~/services/response/ToastMessageService";
</script>
