<template>
  <div id="LearningProcess">
    <div class="d">html.css.javascript製作hover效果，效果內部選寫學習內容、我希望是以放入圖片的方式呈現</div>
    <v-container>
      <h1>學習歷程</h1>
      <h1>這業主要選寫什麼時間學會了什麼，什麼時間做了什麼成品</h1>

      <div class="d-flex flex-column flex-md-row  justify-space-around ">

        <div class="card-box">


          <div v-for="(item, index) in items" :key="item.index">

            <div>{{ item.time }}</div>
            <div>3圖片</div>
            <div>{{ item.name }} </div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center sm-pic">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/html2.png" alt=""> </summary>
                  <p>{{ item.text }}</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/css.png" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.firstlink">

                        <img :src="item.secondimg" alt="">

                      </a>
                      <p>{{ item.secondtext }}</p>
                    </li>
                    <li>
                      <a target="_blank" :href="item.secondlinksecon">

                        <img :src="item.secondeimgesecond" alt="">

                      </a>
                      <p>{{ item.secondtextsecond }}</p>
                    </li>
                  </ul>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/JSS.png" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.thirdlink">

                        <img :src="item.thirdimg" alt="">

                      </a>
                      <p>{{ item.thirdtext }}</p>
                    </li>
                  </ul>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-md-ul d-none d-md-flex" style="justify-content: space-around;">
                <li class="pic"><img src="../assets/html2.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <p>s</p>
                        <p>{{ item.text }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/css.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li><a target="_blank" :href="item.secondlink"><img :src="item.secondimg" alt=""></a>
                        <p>{{ item.secondtext }}</p>
                      </li>
                      <li><a target="_blank" :href="item.secondlinksecon"></a>
                        <img :src="item.secondeimgesecond" alt="">
                        <p>{{ item.secondtextsecond }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/JSS.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <a target="_blank" :href="item.thirdlink">

                          <img :src="item.thirdimg" alt="">

                        </a>
                        <p>{{ item.thirdtext }}</p>
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

            <div>{{ item.time }}</div>
            <div>3圖片</div>
            <div>{{ item.name }} </div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center sm-pic">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/html2.png" alt=""> </summary>
                  <p>{{ item.text }}</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/css.png" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.firstlink">

                        <img :src="item.secondimg" alt="">

                      </a>
                      <p>{{ item.secondtext }}</p>
                    </li>
                    <li>
                      <a target="_blank" :href="item.secondlinksecon">

                        <img :src="item.secondeimgesecond" alt="">

                      </a>
                      <p>{{ item.secondtextsecond }}</p>
                    </li>
                  </ul>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/JSS.png" alt=""> </summary>
                  <ul class="sm-grab-img">
                    <li>
                      <a target="_blank" :href="item.thirdlink">

                        <img :src="item.thirdimg" alt="">

                      </a>
                      <p>{{ item.thirdtext }}</p>
                    </li>
                  </ul>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-md-ul d-none d-md-flex" style="justify-content: space-around;">
                <li class="pic"><img src="../assets/html2.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <p>s</p>
                        <p>{{ item.text }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/css.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li><a target="_blank" :href="item.secondlink"><img :src="item.secondimg" alt=""></a>
                        <p>{{ item.secondtext }}</p>
                      </li>
                      <li><a target="_blank" :href="item.secondlinksecon"></a>
                        <img :src="item.secondeimgesecond" alt="">
                        <p>{{ item.secondtextsecond }}</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/JSS.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>
                        <a target="_blank" :href="item.thirdlink">

                          <img :src="item.thirdimg" alt="">

                        </a>
                        <p>{{ item.thirdtext }}</p>
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
      text: '內文',


      secondlink: 'https://andyeeeee.github.io/position-Syringe',
      secondimg: 'src/assets/learning/syringe.png',
      secondtext: 'postion針筒',

      secondlinksecon: 'https://andyeeeee.github.io/position-bear/',
      secondeimgesecond: 'src/assets/learning/bear.png',
      secondtextsecond: 'postion熊',

      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    },
    {
      time: "2023年4月",
      title: '職訓局網頁前端實體課程',
      text: '內文',


      secondlink: 'https://andyeeeee.github.io/youtube-copy/',
      secondimg: 'src/assets/learning/youtabe.png',
      secondtext: '仿刻youtube',

      thirdlink: 'https://andyeeeee.github.io/-calculator/',
      thirdimg: 'src/assets/learning/calculator.png',
      thirdtext: '計算機周邊功能',

    },
    {
      time: "2023年5月",
      title: '職訓局網頁前端實體課程',
      text: '內文',


      secondlink: 'https://andyeeeee.github.io/bookstrap/',
      secondimg: 'src/assets/Bootstrap.png',
      secondtext: 'Bootstrap-RWD',


      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    }
  ]
})

const items2 = computed(() => {
  return [
    {
      time: "2023年6月",
      title: '職訓局網頁前端實體課程',
      text: '內文',


      secondlink: 'https://andyeeeee.github.io/restaurant-RWD/',
      secondimg: 'src//assets/learning/restaurant-RWD.png',
      secondtext: 'restaurant-RWD',


      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    },
    {
      time: "2023年7月",
      title: '職訓局網頁前端實體課程',
      text: '內文',


      secondlink: '',
      secondimg: 'src/assets/Scss.png',
      secondtext: 'Scss目前沒有代表內容',


      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    },
    {
      time: "2023年8月",
      title: '職訓局網頁前端實體課程',
      text: '內文',


      secondlink: 'https://andyeeeee.github.io/position-Syringe',
      secondimg: 'src/assets/learning/syringe.png',
      secondtext: 'postion針筒',

      secondlinksecon: 'https://andyeeeee.github.io/position-bear/',
      secondeimgesecond: 'src/assets/learning/bear.png',
      secondtextsecond: 'postion熊',

      thirdlink: 'https://andyeeeee.github.io/colck/',
      thirdimg: 'src/assets/learning/colock.png',
      thirdtext: '時鐘',

    }
  ]
})

</script>
