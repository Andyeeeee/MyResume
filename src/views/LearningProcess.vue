<template>
  <div id="LearningProcess">
    <div class="d">html.css.javascript製作hover效果，效果內部選寫學習內容、我希望是以放入圖片的方式呈現</div>
    <v-container>
      <h1>學習歷程</h1>
      <h1>這業主要選寫什麼時間學會了什麼，什麼時間做了什麼成品</h1>

      <div class="d-flex flex-column flex-md-row  justify-space-around ">

        <div class="card-box">



          <div>

            <div>2023年3月</div>
            <div>3圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/html2.png" alt=""> </summary>
                  <p>HTML基礎</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/css.png" alt=""> </summary>
                  <p>css基礎</p>
                  <ul>
                    <li>
                      <a href="">
                        <button style="width: 100px;height:80;background-color: brown;border-radius: 20%;">123</button>
                        <p>23</p>
                      </a>
                    </li>
                  </ul>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/JSS.png" alt=""> </summary>
                  <p>JavaScript基礎</p>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-ul d-none d-md-flex" style="justify-content: space-around;">
                <li class="pic"><img src="../assets/html2.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/css.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/JSS.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

          </div>



        </div>
        <div class="card-box">


          <div>

            <div>2023年3月</div>
            <div>3圖片</div>
            <div>職訓局網頁前端實體課程</div>
            <div class="out-box">
              <!-- 小於sm使用這個 -->
              <div class="d-sm-flex d-md-none text-center">
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/html2.png" alt=""> </summary>
                  <p>123</p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/css.png" alt=""> </summary>
                  <p>css基礎</p>
                  <p></p>
                </details>
                <details>
                  <!-- summary捲動下方 點擊打開 -->
                  <summary><img src="../assets/JSS.png" alt=""> </summary>
                  <p>123</p>
                </details>
              </div>
              <!-- 大於sm使用這格 -->
              <ul class="out-box-ul d-none d-md-flex">
                <li class="pic"><img src="../assets/html2.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </li>
                <li class="pic"><img src="../assets/css.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </li>
                <li class="pic" style=";"><img src="../assets/JSS.png" alt="">
                  <div class="inside-box-ul">
                    <ul class="bar">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
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