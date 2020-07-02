<template>
  <div>
    <div id="capture" style="padding: 10px; background: #f5da55">
      <h4 style="color: #000; ">Hello world!</h4>
      <button @click="abc">버튼</button>
      <button @click="clickblob">blob 변환버튼</button>
    </div>
    <!-- <div id="a"></div> -->
  </div>
</template>
<script>
import html2canvas from "html2canvas";

export default {
  name: "TestPage2",
  data() {
    return {};
  },
  methods: {
    clickblob() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        canvas.toBlob(function(blob) {
          var b = document.createElement("a");
          var url = URL.createObjectURL(blob);
          b.href = url;
          b.download = "filename";
          b.click();
          // window.URL.revokeObjectURL(url);
          console.log(url);
          window.open(url);
        });
      });
    },

    abc() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        var b = document.createElement("a");
        b.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        b.download = "out.jpg";
        b.click();
        // document.querySelector("a").appendChild(canvas);
        // let url = canvas.toDataURL("image/png");
        // console.log(url);
      });
    }
  }
};
</script>
