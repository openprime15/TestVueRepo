<template>
  <v-container fluid>
    <div>
      <v-navigation-drawer :width="width" :value="true" stateless id="capture2">
        <v-img :aspect-ratio="16 / 9" src="https://i.imgur.com/MUlLzZP.jpg">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="subheading">목표 도전</div>
              <div class="body-1">도전합니다</div>
            </v-col>
          </v-row>
        </v-img>
      </v-navigation-drawer>
    </div>

    <v-row>
      <v-btn @click="testClick">캡쳐</v-btn>
    </v-row>
    <div>
      <img src="https://i.imgur.com/MUlLzZP.jpg" alt="" width="300" />
    </div>
    <div id="checkdiv"></div>
  </v-container>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "TestPage",
  data() {
    return {
      width: 500,
    };
  },
  methods: {
    testClick() {
      html2canvas(document.querySelector("#capture2"), {
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        var c = document.createElement("a");
        c.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        c.download = "out.jpg";
        c.click();
        // document.querySelector("checkdiv").appendChild(canvas);
        let url = canvas.toDataURL("image/jpeg");
        console.log(url);
      });
    },
  },
};
</script>
<style>
.subheading {
  font-size: 5rem;
  text-align: center;
}
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
