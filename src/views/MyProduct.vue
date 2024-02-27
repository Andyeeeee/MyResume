<template>
  <div id="MyProduct">
    <v-container>

      <h1>作品集</h1>

      <section class="after-school">
        <h2>訓後作品</h2>
        <v-row>
          <v-col class="v-col-12 v-col-sm-6 v-col-md-4 text-center" v-for="item in items2" :key="item.href">
            <v-btn :style="{ 'background-image': `url(${(item.image)})` }" :href="item.href" target="_blank"
              :title="item.title" :icon="item.icon"
              style="width: 100%;height: 280px;    background-position: center; background-size: cover;">
            </v-btn>
            <br>
            <p>{{ item.text }}</p>
          </v-col>
        </v-row>
      </section>

      <section class="in-school">
        <h2>在訓期間作品</h2>
        <v-row>
          <v-col class="v-col-12 v-col-sm-6 v-col-md-4 text-center" v-for="item in items" :key="item.href">
            <v-btn :style="{ 'background-image': `url(${item.image})` }" :href="item.href" target="_blank"
              :title="item.title" :icon="item.icon"
              style="width: 100%;height: 280px;    background-position: center; background-size: cover;">
            </v-btn>
            <br>
            <p>{{ item.text }}</p>
          </v-col>
        </v-row>
      </section>



    </v-container>
  </div>
</template>
<script setup>
import { computed } from 'vue';


const items = computed(() => {
  return [
    {
      href: 'https://andyeeeee.github.io/vuetify-project1/#/',
      image: 'https://images.cakeresume.com/20RdA/10514f074/06cc4bc1-2c41-4f23-91b6-51f53c430a1c.png',
      title: '餐廳線上訂餐',
      text: '餐廳線上訂餐'
    },
    {
      href: 'https://andyeeeee.github.io/tomato/#/',
      image: 'https://images.cakeresume.com/20RdA/10514f074/5c7774f2-3c63-47f6-8008-3609ce41ce18.png',
      title: '番茄鐘',
      text: '番茄鐘'
    }
    ,
    {
      href: 'https://andyeeeee.github.io/FIGHT-mosquito/',
      image: 'https://images.cakeresume.com/20RdA/10514f074/9cd2e7fb-1038-469a-bab9-a420319696a4.png',
      title: 'JQ蚊子',
      text: 'JQ蚊子'
    },
    {
      href: 'https://andyeeeee.github.io/restaurant-RWD/',
      image: 'https://images.cakeresume.com/20RdA/10514f074/11f8e245-bc62-4554-9211-4c570cc1dda8.png',
      title: '餐廳面板RWD',
      text: '餐廳面板RWD'
    },
    {
      href: '',
      image: 'https://images.cakeresume.com/20RdA/10514f074/acee3368-5a45-4aba-a0bf-ecff0605b010.png',
      title: 'LineBotApi',
      text: 'LineBotApi'
    }
  ]
})



const items2 = [
  {
    image: new URL('../assets/product/product.png', import.meta.url).href,
    href: 'https://andyeeeee.github.io/MyResume/',
    title: '個人履歷',
    text: '個人履歷'
  },
  {
    image: new URL('../assets/product/Ge Diao.png', import.meta.url).href,
    href: 'https://andyeeeee.github.io/Ge-Diao/',
    title: '製作靜態網站',
    text: '製作靜態網站'
  }
]


</script>