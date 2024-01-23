<template>
  <div class="MyProduct">
    <v-container>
      <h1>我的作品</h1>
      <v-row>
        <v-col class="v-col-12 v-col-sm-6 v-col-md-4 text-center" v-for="item in items" :key="item.href">
          <v-btn :style="{ 'background-image': `url(${item.image})` }" :href="item.href" target="_blank"
            :title="item.title" :icon="item.icon"
            style="width: 100%;height: 280px;    background-position: center; background-size: cover;">
          </v-btn>
          <br>
          {{ item.text }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const items = computed(() => {
  return [
    { href: 'https://andyeeeee.github.io/vuetify-project1/#/', image: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=828/https://images.cakeresume.com/20RdA/10514f074/06cc4bc1-2c41-4f23-91b6-51f53c430a1c.png', title: '餐廳線上訂餐', text: '餐廳線上訂餐' },
    { href: 'https://andyeeeee.github.io/tomato/#/', image: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=828/https://images.cakeresume.com/20RdA/10514f074/5c7774f2-3c63-47f6-8008-3609ce41ce18.png', title: '番茄中', text: '番茄中' },
    { href: 'https://andyeeeee.github.io/FIGHT-mosquito/', image: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=828/https://images.cakeresume.com/20RdA/10514f074/9cd2e7fb-1038-469a-bab9-a420319696a4.png', title: 'JQ蚊子', text: 'JQ蚊子' },
    { href: 'https://andyeeeee.github.io/RWD05/', image: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=828/https://images.cakeresume.com/20RdA/10514f074/64a0791a-1d3b-4bf9-8ed8-17f98957db48.png', title: '餐廳面板RWD', text: '餐廳面板RWD' },
    { href: '', image: 'https://www.cakeresume.com/cdn-cgi/image/fit=scale-down,format=auto,w=828/https://images.cakeresume.com/20RdA/10514f074/acee3368-5a45-4aba-a0bf-ecff0605b010.png', title: 'LineBotApi', text: 'LineBotApi' }
  ]
})
</script>