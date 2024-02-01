<template>
  <div id="LearningProcess">
    <v-container>
      <h1>學習歷程</h1>

      <div class="d-flex flex-column flex-md-row  justify-space-around main-box">


        <div class="card-box">


          <div v-for="(item, index) in items" :key="item.index">

            <h2>{{ item.time }}</h2>
            <div class="title">{{ item.title }} </div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center sm-pic">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.leftimg" alt=""> </summary>
                  <ul>
                    <li>
                      <a :href="item.firstlink">
                        <img :src="item.firstimg" alt="">
                      </a>
                      <img :src="item.onllyfirstimg" alt="">
                    </li>
                  </ul>
                  <p>{{ item.firsttext }}</p>
                  <p>{{ item.firstnull }}</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.midimg" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.secondlink">
                        <img :src="item.secondimg" alt="">
                      </a>
                      <img :src="item.onlysecondimg" alt="">
                      <p>{{ item.secondtext }}</p>
                      <p>{{ item.secondnull }}</p>
                    </li>

                  </ul>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.rightimg" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.thirdlink">

                        <img :src="item.thirdimg" alt="">

                      </a>
                      <img :src="item.onlythirdimg" alt="">
                      <p>{{ item.thirdtext }}</p>
                      <p>{{ item.thirdnull }}</p>
                    </li>
                  </ul>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-md-ul d-none d-md-flex" style="justify-content: space-around;">
                <li class="pic"><img :src="item.leftimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <template v-if="item.firstlink">
                          <a target="_blank" :href="item.firstlink">
                            <img :src="item.firstlink" alt="">
                          </a>
                        </template>
                        <template else-if>

                          <img :src="item.onllyfirstimg" alt="">
                        </template>
                        <p>{{ item.firsttext }}</p>
                        <p>{{ item.firstnull }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img :src="item.midimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>

                        <template v-if="item.secondlink">
                          <a target="_blank" :href="item.secondlink">
                            <img :src="item.secondimg" alt="">
                          </a>
                        </template>
                        <template v-else>
                          <img :src="item.onlysecondimg" alt="">
                        </template>
                        <p>{{ item.secondtext }}</p>
                        <p>{{ item.secondnull }}</p>
                      </li>

                    </ul>
                  </div>
                </li>
                <li class="pic"><img :src="item.rightimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <template v-if="item.thirdlink">
                          <a target="_blank" :href="item.thirdlink">

                            <img :src="item.thirdimg" alt="">

                          </a>
                        </template>
                        <template v-else>

                          <img :src="item.onlythirdimg" alt="">
                        </template>
                        <p>{{ item.thirdtext }}</p>
                        <p>{{ item.thirdnull }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>





        <div class="card-box">


          <div v-for="(item, index) in items2" :key="item.index">

            <h2>{{ item.time }}</h2>
            <div class="title">{{ item.title }} </div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center sm-pic">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.leftimg" alt=""> </summary>
                  <ul>
                    <li>
                      <a :href="item.firstlink">
                        <img :src="item.firstimg" alt="">
                      </a>
                      <img :src="item.onllyfirstimg" alt="">
                    </li>
                  </ul>
                  <p>{{ item.firsttext }}</p>
                  <p>{{ item.firstnull }}</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.midimg" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.secondlink">
                        <img :src="item.secondimg" alt="">
                      </a>
                      <img :src="item.onlysecondimg" alt="">
                      <p>{{ item.secondtext }}</p>
                      <p>{{ item.secondnull }}</p>
                    </li>

                  </ul>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img :src="item.rightimg" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.thirdlink">

                        <img :src="item.thirdimg" alt="">

                      </a>
                      <img :src="item.onlythirdimg" alt="">
                      <p>{{ item.thirdtext }}</p>
                      <p>{{ item.thirdnull }}</p>
                    </li>
                  </ul>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-md-ul d-none d-md-flex" style="justify-content: space-around;">
                <li class="pic"><img :src="item.leftimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <template v-if="item.firstlink">
                          <a target="_blank" :href="item.firstlink">
                            <img :src="item.firstlink" alt="">
                          </a>
                        </template>
                        <template else-if>

                          <img :src="item.onllyfirstimg" alt="">
                        </template>
                        <p>{{ item.firsttext }}</p>
                        <p>{{ item.firstnull }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img :src="item.midimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>

                        <template v-if="item.secondlink">
                          <a target="_blank" :href="item.secondlink">
                            <img :src="item.secondimg" alt="">
                          </a>
                        </template>
                        <template v-else>
                          <img :src="item.onlysecondimg" alt="">
                        </template>
                        <p>{{ item.secondtext }}</p>
                        <p>{{ item.secondnull }}</p>
                      </li>

                    </ul>
                  </div>
                </li>
                <li class="pic"><img :src="item.rightimg" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <template v-if="item.thirdlink">
                          <a target="_blank" :href="item.thirdlink">

                            <img :src="item.thirdimg" alt="">

                          </a>
                        </template>
                        <template v-else>

                          <img :src="item.onlythirdimg" alt="">
                        </template>
                        <p>{{ item.thirdtext }}</p>
                        <p>{{ item.thirdnull }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
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
      title: '職訓局網頁前端實體課程',

      leftimg: 'src/assets/html2.png',
      midimg: 'src/assets/css.png',
      rightimg: 'src/assets/JSS.png',

      firsttext: '',

      secondlink: 'https://andyeeeee.github.io/position-bear/',
      secondimg: 'src/assets/learning/bear.png',
      secondtext: 'postion熊',

      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    },
    {
      time: "2023年4月",
      title: '職訓局網頁前端實體課程',

      leftimg: 'src/assets/html2.png',
      midimg: 'src/assets/css.png',
      rightimg: 'src/assets/JSS.png',

      firsttext: '',

      secondlink: 'https://andyeeeee.github.io/youtube-copy/',
      secondimg: 'src/assets/learning/youtabe.png',
      secondtext: '仿刻youtube',

      thirdlink: 'https://andyeeeee.github.io/FIGHT-mosquito/',
      thirdimg: 'https://images.cakeresume.com/20RdA/10514f074/9cd2e7fb-1038-469a-bab9-a420319696a4.png',
      thirdtext: 'jQuery',

    },
    {
      time: "2023年5月",
      title: '職訓局網頁前端實體課程',


      leftimg: 'src/assets/html2.png',
      midimg: 'src/assets/css.png',
      rightimg: 'src/assets/JSS.png',

      firsttext: '',

      secondlink: 'https://andyeeeee.github.io/bookstrap/',
      secondimg: 'src/assets/Bootstrap.png',
      secondtext: 'Bootstrap-RWD',


      thirdlink: '',
      onlythirdimg: 'https://images.cakeresume.com/20RdA/10514f074/acee3368-5a45-4aba-a0bf-ecff0605b010.png',
      thirdtext: 'node.js 串接api',
      thirdnull: '(無超連結)'

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
