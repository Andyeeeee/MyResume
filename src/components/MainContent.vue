<template>
  <div id="MainContent">
    <v-container>

      <v-row class="text-center">
        <v-col class="v-col-12 v-col-sm-6 v-col-lg-4" v-for="item in items" :key="item.to">
          <v-btn :title="item.title" :text="item.text" :icon="item.icon" :to="item.to">
          </v-btn>
          <br>
          {{ item.title }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const items = computed(() => {
  return [
    { to: '/aboutme', title: '關於我', icon: 'mdi-face-man', text: '關於我' },
    { to: '/myproduct', title: '我的作品', icon: 'mdi-book-open', text: '我的作品' },
    { to: '/myskill', title: '我的技能', icon: 'mdi-hubspot', text: '我的技能' },
    { to: '/learningprocess', title: '學習歷程', icon: 'mdi-book-open-page-variant', text: '學習歷程' },
    { to: '/myexperience', title: '我的經歷', icon: 'mdi-ski', text: '我的經歷' }
  ]
})
</script>
