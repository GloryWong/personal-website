<template>
  <div class="home bg-purple-50">
    <header>
      <h1>Zhao Zhao today</h1>
    </header>
    <main>
      <div class="social">
        <ul>
          <li v-for="{ id, label, url } in social" :key="id">
            <a :href="url" rel="noopener" target="_blank">
              {{ label }}
            </a>
          </li>
        </ul>
      </div>
      <div class="project">
        <ul>
          <li v-for="{ id, label, url } in project" :key="id">
            <a :href="url" rel="noopener" target="_blank">
              {{ label }}
            </a>
          </li>
        </ul>
      </div>
    </main>
    <footer></footer>
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
