<template>
    <Listbox :v-model="itemCurrent">
      <div class="relative">
        <BaseButton :button-theme="themeButtonService.getThemeButtonById(1)">
          <ListboxButton class="flex">
            <component 
              v-if="itemCurrent.icon" 
              :is="itemCurrent.icon"
             class="h-5 w-5 text-gray-400"
            />
            <span v-else class="block truncate">
                {{ itemCurrent.name }}
            </span>
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ListboxButton>
        </BaseButton>
  
        <transition 
          leave-active-class="transition duration-100 ease-in" 
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute left-1/2 -translate-x-1/2 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active }"
              v-for="item in itemList"
              :key="item.name"
              :value="item"
              class="w-32 py-2 px-2"
              @click="$emit('itemClicked', item)"
            >
              
              <li
                :class="[
                  active ? 'bg-pink-100 text-pink-900 rounded-md' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4 min-w-20',
                ]"
              >
                <span
                  :class="[
                    item.name === itemCurrent.name ? 'font-medium' : 'font-normal',
                    'block truncate flex justify-center',
                  ]"
                  >
                  <component 
                  v-show="item.icon" 
                  :is="item.icon"
                  class="h-5 w-5 mr-2"
                  />
                  {{ item.name }}
                  </span
                >
                <span
                  v-if="item.name === itemCurrent.name"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-pink-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
</template>
  
<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

import { ChevronUpDownIcon, CheckIcon,  } from '@heroicons/vue/20/solid'

import { themeButtonService } from "~/services/theme/ThemeButtonService";
import { IBaseSwitchItem } from "~/models/base/IBaseSwitchItem";

import BaseButton from "./BaseButton.vue"

interface Props {
    itemCurrent: IBaseSwitchItem;
    itemList: IBaseSwitchItem[];
}
defineProps<Props>();
</script>