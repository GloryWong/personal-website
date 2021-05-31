<template>
  <div class="w-screen h-screen flex flex-col">
    <header
      class="
        flex flex-col
        lg:flex-row
        justify-center
        items-center
        p-7
        bg-gradient-to-r
        from-purple-400
        via-pink-500
        to-red-500
      "
    >
      <div class="w-32 md:w-52">
        <img class="w-auto" src="@/assets/logo.webp" />
      </div>
      <div class="lg:ml-14">
        <h1 class="text-3xl text-gray-50 text-center lg:text-left">
          Zhao Zhao Today
        </h1>
        <div class="social text-center lg:text-left">
          <ul class="flex flex-wrap">
            <li
              v-for="{ id, label, url } in social"
              :key="id"
              class="flex-auto mr-3"
            >
              <a
                :href="url"
                rel="noopener"
                target="_blank"
                class="underline text-gray-100 whitespace-nowrap"
              >
                {{ label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main class="flex-auto p-3.5 lg:p-8 shadow-inner">
      <div class="project">
        <ul class="flex flex-wrap">
          <li v-for="{ id, label, url } in project" :key="id">
            <a :href="url" rel="noopener" target="_blank">
              <div
                class="
                  flex-col
                  inline-flex
                  ring-4 ring-purple-300
                  rounded-md
                  overflow-hidden
                "
              >
                <div class="w-32 h-40 bg-purple-300"></div>
                <div class="text-center text-gray-800 bg-purple-100">
                  {{ label }}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <footer class="text-center text-gray-500 p-1 lg:p-5">
      Copyright © {{ new Date().getFullYear() }}. All rights reserved. Host in
      Netlify
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import * as config from "@/config";

export default class Home extends Vue {
  social = config.social;
  project = config.project;
}
</script>
