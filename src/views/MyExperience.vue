<template>
  <div id="MyExperience">
    <v-container>
      <h1>工作經歷</h1>

      <div class="d-flex flex-column flex-md-row  justify-space-around main-box">


        <div class="card-box">


          <div v-for="(item, index) in items" :key="item.index">

            <div class="date">{{ item.time }}</div>

            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-flex flex-column flex-sm-row  text-center align-center sm-pic">
                <div>
                  <img :src="item.leftimg" alt="">
                  <!-- <div>{{ item.company }} </div> -->
                  <h4>{{ item.company }}</h4>
                </div>
                <div>

                  <ul>
                    <li>
                    </li>
                    <li>{{ item.position }}</li>
                    <li>{{ item.skill1 }}</li>
                    <li>{{ item.skill2 }}</li>
                    <li>{{ item.skill3 }}</li>
                  </ul>

                </div>

              </div>
            </div>

          </div>

        </div>



        <div class="card-box">


          <div v-for="(item, index) in items2" :key="item.index">

            <div class="date">{{ item.time }}</div>

            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-flex flex-column flex-sm-row  text-center align-center sm-pic">
                <div>
                  <img :src="item.leftimg" alt="">
                  <!-- <div>{{ item.company }} </div> -->
                  <h4>{{ item.company }}</h4>
                </div>
                <div>

                  <ul>
                    <li>
                    </li>
                    <li>{{ item.position }}</li>
                    <li>{{ item.skill1 }}</li>
                    <li>{{ item.skill2 }}</li>
                    <li>{{ item.skill3 }}</li>
                  </ul>

                </div>

              </div>
            </div>

          </div>

        </div>



      </div>


    </v-container>


  </div>
</template>

<script setup>
import { computed } from 'vue';

const items = computed(() => {
  return [
    {
      time: "2023年3月",

      leftimg: 'src/assets/Experience/food.png',
      company: '福和生鮮',

      position: '品管',
      skill1: '1',
      skill2: '1',
      skill3: '1',
    },
    {
      time: "2023年3月",

      leftimg: 'src/assets/html2.png',
      company: '職訓局網頁前端實體課程',

      position: '',
      skill1: '2',
      skill2: '2',
      skill3: '',
    },
    {
      time: "2023年3月",

      leftimg: 'src/assets/html2.png',
      company: '職訓局網頁前端實體課程',

      position: '',
      skill1: '3',
      skill2: '',
      skill3: '',
    }
  ]
})

const items2 = computed(() => {
  return [
    {
      time: "2023年6月",
      title: '職訓局網頁前端實體課程',

      leftimg: 'src/assets/html2.png',
      midimg: 'src/assets/css.png',
      rightimg: 'src/assets/JSS.png',

      firsttext: '',

      secondlink: 'https://andyeeeee.github.io/restaurant-RWD/',
      secondimg: 'src//assets/learning/restaurant-RWD.png',
      secondtext: 'restaurant-RWD',


      thirdlink: 'https://andyeeeee.github.io/tomato/#/',
      thirdimg: 'https://images.cakeresume.com/20RdA/10514f074/5c7774f2-3c63-47f6-8008-3609ce41ce18.png',
      thirdtext: '番茄鐘',

    },
    {
      time: "2023年7月",
      title: '職訓局網頁前端實體課程',

      leftimg: 'src/assets/html2.png',
      midimg: 'src/assets/css.png',
      rightimg: 'src/assets/JSS.png',

      firsttext: '',

      secondlink: '',
      onlysecondimg: 'src/assets/Scss.png',
      secondtext: '',
      secondnull: '(無超連結)',


      thirdlink: '',
      onlythirdimg: 'src/assets/learning/Vue3.png',
      thirdtext: 'Vue框架',
      thirdnull: '(無超連結)'

    },
    {
      time: "2023年8月",
      title: '職訓局網頁前端實體課程(專題製作)',

      leftimg: 'src/assets/learning/Scss.png',
      midimg: 'src/assets/learning/Vue3.png',
      rightimg: 'src/assets/learning/node.png',

      firsttext: '',

      secondlink: '',
      onlysecondimg: '',
      secondtext: '',

      secondlink: 'https://andyeeeee.github.io/vuetify-project1/#/',
      secondimg: 'https://images.cakeresume.com/20RdA/10514f074/06cc4bc1-2c41-4f23-91b6-51f53c430a1c.png',
      secondtext: '餐廳線上訂餐',

      thirdlink: '',
      thirdimg: '',
      thirdtext: '',

    }
  ]
})

</script>
