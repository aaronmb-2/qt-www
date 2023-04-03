<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8">{{ $t('home.brokers_connected') }}</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <a  
            v-for="cb in connectedBrokers"
            :key="cb.broker"
            :value="cb"
            :href="cb.link"
            target="_blank">
            <img
                :src=cb.image
                :alt="cb.broker"
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 w-auto h-10">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import binance from "@/assets/images/binance.png"
import degiro from "@/assets/images/degiro.png"
import coinbase from "@/assets/images/coinbase.png"
import ib from "@/assets/images/ib.png"
import cryptocom from "@/assets/images/cryptocom.png"
import robinhood from "@/assets/images/robinhood.png"

import { ConnectedBroker } from "~/types/ConnectedBroker";

const connectedBrokers: ConnectedBroker[] = [
    { broker: 'binance', image: binance, link: "https://binance.com/"},
    { broker: 'DeGiro', image: degiro, link: "https://www.degiro.com/"},
    { broker: 'Coinbase', image: coinbase, link: "https://www.coinbase.com/"},
    { broker: 'Interactive Brokers', image: ib, link: "https://www.interactivebrokers.com/en/home.php"},
    { broker: 'Crypto.com', image: cryptocom, link: "https://crypto.com/eea"},
    { broker: 'Robinhood', image: robinhood, link: "https://robinhood.com/us/en/"},
]
</script>