<template>
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
          <p>s</p>
          <p>{{ item.text }}</p>
        </details>
        <details>
          <!-- summary捲動下方 點擊打開 -->
          <summary><img src="../assets/css.png" alt=""> </summary>
          <ul class="sm-grab-img">
            <li>
              <a target="_blank" :href="item.firstlink">

                <img :src="item.secondimgone" alt="">

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

                <img :src="item.thirdimgone" alt="">

              </a>
              <p>{{ item.thirdtextone }}</p>
            </li>
          </ul>
        </details>
      </div>
      <!-- 大於sm使用這格 -->
      <ul class="out-box-ul d-none d-md-flex" style="justify-content: space-around;">
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
</template>

<script setup>
import { computed } from 'vue';

const items = computed(() => {
  return [
    {
      time: "time",
      title: 'asd',
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
  ]
})

</script>
