<template>
  <div id="TitlePic">
    <div class="d-sm-flex  align-center  justify-space-evenly">

      <div class="clock-numbrt title-box">
        <div class="d-flex colck-box" style="flex: 1;">
          <img src="/src/assets/FooterMe.png" alt=""
            style="border-radius: 50%;width: 100%; border: 10px solid rgb(36, 48, 207);">
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
import { ref, onMounted } from 'vue';

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