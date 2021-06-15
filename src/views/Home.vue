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
        <img
          class="w-auto transition transform"
          :class="logoTransform ? 'rotate-45' : ''"
          src="@/assets/logo.webp"
          @click="logoTransform = !logoTransform"
        />
      </div>
      <div class="lg:ml-14">
        <h1 class="text-3xl text-gray-50 text-center lg:text-left">
          Zhao Zhao Today
        </h1>
        <div class="social text-center lg:text-left">
          <ul class="flex flex-wrap">
            <li
              v-for="{ id, label, url, dialog } in social"
              :key="id"
              class="flex-auto mr-3 leading-8"
            >
              <a
                v-if="url"
                :href="url"
                rel="noopener"
                target="_blank"
                class="underline text-gray-100 whitespace-nowrap"
              >
                {{ label }}
              </a>
              <button
                v-else-if="dialog"
                class="underline text-gray-100 whitespace-nowrap"
                @click="wechatqrVisible = true"
              >
                {{ label }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Modal v-model="wechatqrVisible" title="Scan QR code to WeChat me">
        <img class="w-auto" src="@/assets/wechatqrcode.jpeg" />
      </Modal>
    </header>
    <main class="flex-auto p-3.5 lg:p-8 shadow-inner">
      <div class="project">
        <ul class="flex flex-wrap">
          <li v-for="{ id, label, url } in project" :key="id" class="mr-10">
            <a :href="url" rel="noopener" target="_blank">
              <div
                class="
                  flex-col
                  inline-flex
                  rounded-md
                  shadow-lg
                  overflow-hidden
                  transition
                  ease-in-out
                  duration-200
                  transform
                  hover:scale-110
                "
              >
                <div class="h-40 bg-purple-50"></div>
                <div class="text-center text-gray-800 px-3 py-1">
                  {{ label }}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <footer class="text-center text-gray-500 p-1 lg:p-5 text-xs sm:text-base">
      Copyright © {{ new Date().getFullYear() }}. All rights reserved. Host in
      Netlify.
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as config from "@/config";
import Modal from "@/components/Modal.vue";

@Options({
  components: {
    Modal,
  },
})
export default class Home extends Vue {
  social = config.social;
  project = config.project;

  wechatqrVisible = false;
  logoTransform = false;
}
</script>
