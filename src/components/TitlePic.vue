<template>
  <div id="TitlePic">
    <div class="d-sm-flex  align-center  justify-space-evenly">

      <div class="d-none d-md-block title-box">
        <div v-html="weatherImage"></div>
        <div class="MinT">
          <samp v-text="minT"></samp><span> &#8451; </span>
        </div>
      </div>

      <div class="clock-numbrt title-box">
        <div class="d-flex colck-box" style="flex: 1;">
          <img src="/src/assets/FooterMe.png" alt="">
        </div>
        <div>{{ currentTime }} </div>
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
                <li>日.</li>
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
const minT = ref(null)

const weatherData = async () => {
  try {
    const weather = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EBDD970B-60A8-41FC-9B88-6982746FADEC&locationName=%E8%87%BA%E5%8C%97%E5%B8%82');
    console.log("weather");
    console.log(weather);
    const weatherDescription = weather.data.records.location[0].weatherElement[0].time[0].parameter.parameterValue;
    console.log("weatherDescription");
    console.log(weatherDescription);
    minT.value = weatherDescription
    const weathertime = weather.data.records.location[0].weatherElement[0].time[0].endTime;
    console.log(weatherDescription);
    console.log(weathertime);
    weatherImage.value = changeImg(weatherDescription, weathertime);
    // minT.value = weather.data.records.location[0].weatherElement[2].time[0].parameter.parameterName
    // console.log(minT);
    console.log("最低溫");
  } catch (error) {
    console.log('資料抓取失敗', error);
  }
}


//天氣function
const changeImg = (weatherDescription, weathertime) => {
  // sun包括moon 用時間來判斷使用太陽還是月亮 如果圖形不包含太陽月亮就通用
  const sun1 = 1
  const sun2 = 24
  const sun = [sun1, sun2]
  console.log(sun);

  const sunPartlyCloudy1 = [2, 3, 4]
  const sunPartlyCloudy2 = [25, 26, 27]
  const sunPartlyCloudy = sunPartlyCloudy1.concat(sunPartlyCloudy2)
  console.log(sunPartlyCloudy);


  const sunRining = [19, 20, 29, 31]
  const sunRainingThunder1 = [33, 35]
  const sunRainingThunderChange2 = [21, 22]
  const sunRainingThunder = sunRainingThunder1.concat(sunRainingThunderChange2)
  console.log(sunRainingThunder);


  const cloudy1 = [5, 6, 7]
  const cloudy2 = 28
  const cloudy = cloudy1.concat(cloudy2)
  console.log(cloudy);

  const raining = [...Array.from({ length: 7 }, (_, i) => i + 8), 30, 32, 38, 39]
  console.log(raining);
  //!?

  const rainingThunder = [...Array.from({ length: 3 }, (_, i) => i + 15), 34, 36, 41]
  const rainingSnow = [23, 37]
  const snow = 42

  console.log(weathertime);



  //有太陽的白天天氣 18:00前  為白天   sun暫時代表太陽月亮
  //圖示來源https://www.flaticon.com/search?word=weather
  if (sun.includes(parseInt(weatherDescription)) && weathertime.includes("18:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" alt="SunGoodWeather" />`
  } else if (sunPartlyCloudy.includes(parseInt(weatherDescription)) && weathertime.includes("18:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt="SunCloudy" />`
  }
  else if (sunRining.includes(parseInt(weatherDescription)) && weatherDescription.includes("18:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png" alt="sunRining" />`
  }
  else if (sunRainingThunder.includes(parseInt(weatherDescription)) && weatherDescription.includes("18:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1163/1163734.png" alt="sunRainingThunder" />`
  }

  // 晚上------------------------

  else if (sun.includes(parseInt(weatherDescription)) && weathertime.includes("6:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/239/239467.png" alt="MoonGoodWeather" />`
  } else if (sunPartlyCloudy.includes(parseInt(weatherDescription)) && weathertime.includes("6:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1747/1747597.png" alt="moonCloudy" />`
  }
  else if (sunRining.includes(parseInt(weatherDescription)) && weatherDescription.includes("6:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/9755/9755258.png" alt="moonRining" />`
  }
  else if (sunRainingThunder.includes(parseInt(weatherDescription)) && weatherDescription.includes("6:00")) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/10596/10596380.png" alt="moonRainingThunder" />`
  }

  //不分白天晚上

  else if (cloudy.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/6566/6566213.png" alt="cloudy" />`
  }
  else if (raining.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/4088/4088981.png" alt="raining" />`
  }
  else if (rainingThunder.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/3104/3104612.png" alt="rainingThunder" />`
  }
  else if (rainingSnow.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/984/984627.png" alt="rainingSnow" />`
  }
  else if (snow.includes(parseInt(weatherDescription))) {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1409/1409310.png" alt="snow" />`
  } else {
    return `<img src="https://cdn-icons-png.flaticon.com/128/1586/1586270.png" alt="weatherERROR" />`
  }
  // return '';
}

weatherData();

/*月曆----------------------------*/

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

  /*time*/
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
