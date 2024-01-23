<template>
  <div id="MainFooter">
    <v-row class="v-col-12">
      <v-col class="v-col-12 v-col-sm-4">
        <div>林駿丞</div>
        <div>中華科技大學畢業</div>
        <div>職訓前端結訓</div>
      </v-col>
      <v-col class="v-col-12 v-col-sm-4">
        <v-icon icon="mdi-emoticon-outline" class="smile"></v-icon>

      </v-col>
      <v-col class="v-col-12 v-col-sm-4">
        <div><v-icon icon="mdi-email-edit-outline" />信箱:<span id="gmailURL">10514f074@gmail.com</span>
          <button @click="copyGmail"><v-icon icon="mdi-content-copy"></v-icon></button>
        </div>
        <div><v-icon icon="mdi-cellphone-text" />LINE(手機):<span id="copyURL">0908488070</span>
          <button @click="copyPhoneNumber"> <v-icon icon="mdi-content-copy"></v-icon></button>
        </div>
        <div><v-icon icon="mdi-phone"></v-icon>電話:<span id="copyURL">0908488070</span>
          <button @click="copyPhoneNumber"> <v-icon icon="mdi-content-copy"></v-icon></button>
        </div>
        <div>製作線上預約功能</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    copyGmail() {
      const copyGmail = document.getElementById('gmailURL').textContent;
      navigator.clipboard.writeText(copyGmail)
    },
    copyPhoneNumber() {
      const copyPhoneNumber = document.getElementById('copyURL').textContent;
      navigator.clipboard.writeText(copyPhoneNumber)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  }
}
</script>