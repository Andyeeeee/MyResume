<template>
  <div id="TitlePic">
    <div class="d-sm-flex  align-center  justify-space-evenly">

      <div class="d-none d-md-block title-box">
        <div v-html="weatherImage"></div>
      </div>

      <div class="clock-numbrt title-box">
        <div class="d-flex colck-box" style="flex: 1;">
          <img src="/src/assets/FooterMe.png" alt=""
            style="border-radius: 50%;width: 100%; border: 10px solid rgb(194, 35, 35);">
        </div>
        <div id="time"></div>
      </div>

      <div class="d-none d-sm-block title-box">
        <div class="calendar">
          <div class="title">
            <h1 class="green small" id="calendar-year">Year</h1>


            <a href="" id="prev"><v-icon icon="mdi-arrow-left-bold"></v-icon></a>
            <span class="green" id="calendar-title">Month</span>
            <a href="" id="next"><v-icon icon="mdi-arrow-right-bold"></v-icon></a>
          </div>
          <div class="body">
            <div class="lightgrey body-list">
              <ul>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
              </ul>
            </div>
            <div class="darkgrey body-list">
              <ul id="days">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="https://github.com/Andyeeeee" class="git" target="_blank">
      <button>gitub</button></a>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const weatherImage = ref('')

const weatherData = async () => {
  try {
    const weather = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EBDD970B-60A8-41FC-9B88-6982746FADEC&locationName=%E8%87%BA%E5%8C%97%E5%B8%82');
    console.log(weather);
    const weatherDescription = weather.data.records.location[0].weatherElement[0].time[0].parameter.parameterValue;
    const weathertime = weather.data.records.location[0].weatherElement[0].time[0].endTime;
    console.log(weatherDescription);
    console.log(weathertime);
    weatherImage.value = changeImg(weatherDescription, weathertime);
  } catch (error) {
    console.log('資料抓取失敗', error);
  }
}

const changeImg = (weatherDescription, weathertime) => {
  const raining = [...Array.from({ length: 7 }, (_, i) => i + 8), 30, 32, 38, 39];
  console.log(raining);
  if (raining.includes(parseInt(weatherDescription)) && weathertime.includes("18:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" alt="cloudy" />`
  } else if (raining.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1146/1146858.png" alt="cloudy" />`
  }
  return '';
}

weatherData();

/*----------------------------*/

const currentTime = ref('');
const monthOlympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthName = [
  "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
];
let holder;
let prev;
let next;
let ctitle;
let cyear;

onMounted(() => {
  holder = document.getElementById("days");
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  ctitle = document.getElementById("calendar-title");
  cyear = document.getElementById("calendar-year");

  setInterval(() => {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    currentTime.value = `${hour}:${minute}:${second} ${ampm}`;
  }, 1000);

  refreshDate();
});

let myYear = new Date().getFullYear();
let myMonth = new Date().getMonth();
const myDay = new Date().getDate();

const dayStart = (month, year) => {
  const tmpDate = new Date(year, month, 1);
  return tmpDate.getDay();
};

const daysMonth = (month, year) => {
  const tmp = year % 4;
  return tmp === 0 ? monthOlympic[month] : monthNormal[month];
};

const refreshDate = () => {
  let str = "";
  const totalDay = daysMonth(myMonth, myYear);
  const firstDay = dayStart(myMonth, myYear);
  let myclass;
  for (let i = 1; i < firstDay; i++) {
    str += "<li></li>";
  }
  for (let i = 1; i <= totalDay; i++) {
    if ((i < myDay && myYear === new Date().getFullYear() && myMonth === new Date().getMonth()) ||
      myYear < new Date().getFullYear() ||
      (myYear === new Date().getFullYear() && myMonth < new Date().getMonth())) {
      myclass = " class='lightgrey'";
    } else if (i === myDay && myYear === new Date().getFullYear() && myMonth === new Date().getMonth()) {
      myclass = " class='green greenbox'";
    } else {
      myclass = " class='darkgrey'";
    }
    str += "<li" + myclass + ">" + i + "</li>";
  }
  holder.innerHTML = str;
  ctitle.textContent = monthName[myMonth];
  cyear.textContent = myYear;
};

const prevMonth = () => {
  myMonth--;
  if (myMonth < 0) {
    myYear--;
    myMonth = 11;
  }
  refreshDate();
};

const nextMonth = () => {
  myMonth++;
  if (myMonth > 11) {
    myYear++;
    myMonth = 0;
  }
  refreshDate();
};

</script>



<style>
/*排版*/
.calendar {
  width: 350px;
  /* height: 350px; */
  /* background: #ffffff00; */
  /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1); */
  text-align: center;
  /* border: #565656 1px solid; */
}

.body-list ul {
  width: 100%;
  font-family: arial;
  font-weight: bold;
  font-size: 14px;
}

.body-list ul li {
  width: 14.28%;
  height: 36px;
  line-height: 36px;
  list-style-type: none;
  display: block;
  box-sizing: border-box;
  float: left;
  text-align: center;
}

/*顏色*/

.lightgrey {
  color: #a8a8a8;
  /*浅灰色*/
}

.darkgrey {
  color: #565656;
  /*深灰色*/
}

.green {
  color: #6ac13c;
  /*绿色*/
}

.greenbox {
  border: 1px solid #6ac13c;
  background: #e9f8df;
  /*浅绿色背景*/
}
</style>