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
              <div class="d-flex flex-column flex-sm-row  text-center  sm-pic">
                <div class="align-center">
                  <img :src="item.leftimg" alt="">
                  <!-- <div>{{ item.company }} </div> -->
                  <h3>{{ item.company }}</h3>
                </div>
                <div>

                  <ul>
                    <li>
                    </li>
                    <li>
                      <h3> {{ item.position }}</h3>
                    </li>
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
              <div class="d-flex flex-column flex-sm-row  text-center  sm-pic">
                <div class="align-center">
                  <img :src="item.leftimg" alt="">
                  <!-- <div>{{ item.company }} </div> -->
                  <h3>{{ item.company }}</h3>
                </div>
                <div>

                  <ul>
                    <li>
                    </li>
                    <li>
                      <h3> {{ item.position }}</h3>
                    </li>
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
      time: "2019/7~2019/8",

      leftimg: 'src/assets/Experience/food.png',
      company: '福和生鮮',

      position: '品管(實習)',
      skill1: '協助農藥殘留檢驗',
      skill2: '協助流水線生產',
      skill3: '',
    },
    {
      time: "202/4~2021/8",

      leftimg: 'src/assets/Experience/food2.jpg',
      company: '宏遠國際餐飲',

      position: '衛管',
      skill1: '負責團膳食材檢驗與盤點',
      skill2: '負責環境衛生管理相關事項',
      skill3: '負責處理客訴及行政文書處理',
    },
    {
      time: "2021/8~2022/2",

      leftimg: 'src/assets/Experience/windows.jpg',
      company: '晶品窗簾',

      position: '業務',
      skill1: '負責市場客源開發相關事宜',
      skill2: '負責現場尺寸丈量及規劃',
      skill3: '負責銷售客戶關係管理事宜',
    }
  ]
})

const items2 = computed(() => {
  return [
    {
      time: "2022/3~2023/2",

      leftimg: 'src/assets/Experience/uber.png',
      company: '優步',

      position: '外送員',
      skill1: '負責將店家餐點送至客人手中',
      skill2: '',
      skill3: '',
    },
    {
      time: "2022/3~2021/8",

      leftimg: 'src/assets/Experience/sutdent.png',
      company: '職訓(非工作經歷)',

      position: '學員',
      skill1: '學習網頁前端相關技術',
      skill2: '',
      skill3: '',
    },
    {
      time: "2023/11~2023/12",

      leftimg: 'src/assets/Experience/woek.png',
      company: '喜福',

      position: '計時人員',
      skill1: '協助分類床單',
      skill2: '協助燙枕頭套並整理',
      skill3: '',
    }
  ]
})


</script>
