<template>
  <div id="LearningProcess">
    <div class="d">html.css.javascript製作hover效果，效果內部選寫學習內容、我希望是以放入圖片的方式呈現</div>
    <v-container>
      <h1>學習歷程</h1>
      <h1>這業主要選寫什麼時間學會了什麼，什麼時間做了什麼成品</h1>

      <div class="d-flex flex-column flex-sm-row flex-wrap  justify-space-around ">

        <div class="card-box">

          <div>

            <div>2023年2月</div>
            <div>2圖片</div>
            <div>網頁前端入們實體課程</div>
            <div>學習內容:html、css、api</div>

          </div>
          <div>

            <div>2023年3月</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript</div>

          </div>

          <div>

            <div>2023年4月</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript、jq</div>
            <div>作業成品:jq隨機變數,jq翻牌</div>

          </div>

          <div>

            <div>2023/5</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript</div>
            <div>作業成品:linebot</div>
            <div>取得丙級網頁設計證照</div>

          </div>

        </div>

        <div class="card-box">

          <div>

            <div>2023/6</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript、vue3.js,mongodb、api</div>
            <div>作業成品:番茄中</div>


          </div>

          <div>

            <div>2023/7</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript、vue3.js,mongodb、api</div>
            <div>作業成品:</div>


          </div>

          <div>

            <div>2023/8</div>
            <div>2圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div>學習內容:html、css、javascript、vue3.js,mongodb、api</div>
            <div>專題製作:線上購物</div>


          </div>

        </div>



      </div>


    </v-container>

  </div>
</template>
<script setup></script>
<style>
.card-box>div {
  text-align: center;
  width: 500px;
  height: 200px;
  border: 1px solid black;
  background-image: url('../assets/Tree.png');
  background-size: contain;
  padding-left: 80px;
}
</style>