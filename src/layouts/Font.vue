<template>
  <div id="Font">
    <v-app>
      <v-navigation-drawer v-if="ismobile" v-model="drawer" location="right" temporary>
        <v-list v-for="item in  items " :key="item.to">
          <v-list-item :to="item.to" :prepend-icon="item.icon" :title="item.title"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-btn to="/">
          <v-app-bar-title>
            首頁
          </v-app-bar-title>
        </v-btn>
        <v-spacer />
        <v-app-bar-nav-icon v-if="ismobile" @click="drawer = true" />
        <template v-if="!ismobile">
          <v-btn>關於我</v-btn>
          <v-btn>我的作品</v-btn>
          <v-btn>我的能力</v-btn>
          <v-btn>學習歷程</v-btn>
          <v-btn>我的經歷</v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <TitlePicVue></TitlePicVue>
        <router-view />
        <MainFooter></MainFooter>
      </v-main>
    </v-app>
  </div>
</template>
<script setup>
import MainFooter from '@/components/MainFooter.vue'
import TitlePicVue from '@/components/TitlePic.vue'
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const ismobile = computed(() => mobile.value)

const drawer = ref(false)

const items = computed(() => {
  return [
    { to: '/aboutme', title: '關於我', icon: 'mdi-face-man', text: '關於我' },
    { to: '/aboutme', title: '我的作品', icon: 'mdi-book-open', text: '我的作品' },
    { to: '/aboutme', title: '我的技能', icon: 'mdi-hubspot', text: '我的技能' },
    { to: '/aboutme', title: '學習歷程', icon: 'mdi-book-open-page-variant', text: '學習歷程' },
    { to: '/aboutme', title: '我的經歷', icon: 'mdi-ski', text: '我的經歷' }
  ]
})

</script>
