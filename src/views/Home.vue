<template>
  <div class="home">
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
    <footer>

    </footer>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
    social = [{
    id: 'wechat',
    label: 'Wechat',
    action: () => {
        // wcqcVisible = true;
      }
    }, {
      id: 'weibo',
      label: 'Weibo',
      url: 'https://weibo.com/1768830500/profile?topnav=1&wvr=6&is_all=1'
    }, {
      id: 'neteasemusic',
      label: 'Netease Music',
      url: 'https://music.163.com/#/user/home?id=261618415'
    }, {
      id: 'codepen',
      label: 'Code Pen',
      url: 'https://codepen.io/glorywong'
    }, {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/glorywongzhaohui'
    }, {
      id: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/glorywong1001'
    }, {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/glorywong1001/'
    }, {
      id: 'github',
      label: 'Github',
      url: 'https://github.com/glorywong'
    }, {
      id: 'email',
      label: 'Email',
      url: 'mailto:glorywong1001@gmail.com'
    }];
    
    project = [{
      id: 'covid19-xiaogan',
      label: '孝感新冠疫情',
      url: '/2019ncov-xiaogan/',
      image: 'https://i.ibb.co/F4xxhSL/xiaogan-logo-64-64.png'
    }];
}
</script>
