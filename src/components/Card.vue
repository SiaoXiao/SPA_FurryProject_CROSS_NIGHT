<template>
  <div class="card">
    <div class="cardContent">
      <div class="cardView">
        <div class="card_bg"></div>
        <div class="card_title">
          <div></div>
          <h3 class="text-xl tracking-wide font-bold text-gray-900">12/31 一般參加者</h3>
          <span class="tracking-wide text-gray-900">【＄1000】</span>
        </div>
      </div>
      <div class="cardInfo">
        <div>
          <div class="flex flex-col items-start justify-center text-sm text-gray-500 tracking-wider">
              <span>20023 入場資格</span>
              <span>2023 識別證</span>
              <span>導覽手冊</span>
              <span>跨年卡片</span>
              <span>海報</span>
            </div>
        </div>
        <div class="flex items-center justify-center p-5">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAKufYxi9cSQw-H63XPIlSF8Hp7fZWUUD5c3FJIusVwN69iw/closedform" target="_blank" class="shadow-lg p-3 bg-fuchsia-400 rounded text-white tracking-wider hover:bg-fuchsia-500 transition-all duration-200">報名</a>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="cardContent">
      <div class="cardView">
        <div class="card_bg2"></div>
        <div class="card_title">
          <div></div>
          <h3 class="text-xl tracking-wide font-bold text-gray-900">12/31 贊助參加者</h3>
          <span class="tracking-wide text-gray-900">【＄1500】</span>
        </div>
      </div>
      <div class="cardInfo">
        <div>
          <div class="flex flex-col items-start justify-center text-sm text-gray-500 tracking-wider">
              <span>20023 入場資格</span>
              <span>2023 識別證</span>
              <span>導覽手冊</span>
              <span>跨年卡片</span>
              <span>海報</span>
              <span>抽獎資格 x1</span>
              <span>紀念貼紙</span>
              <span>餐食提供</span>
              <span>跨年卡片</span>
            </div>
        </div>
        <div class="flex items-center justify-center p-5">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPfR4uSx_w12GHaIfYSGEmHH1QobAx2Ych56AZLF-V68ss1g/closedform" target="_blank" class="shadow-lg p-3 bg-fuchsia-400 rounded text-white tracking-wider hover:bg-fuchsia-500 transition-all duration-200">報名</a>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="cardContent">
      <div class="cardView">
        <div class="card_bg3"></div>
        <div class="card_title">
          <div></div>
          <h3 class="text-xl tracking-wide font-bold text-gray-900">12/31 特別贊助者</h3>
          <span class="tracking-wide text-gray-900">【＄2000】</span>
        </div>
      </div>
      <div class="cardInfo">
        <div>
          <div class="flex flex-col items-start justify-center text-sm text-gray-500 tracking-wider">
            
            <span>開放至50位</span>
            <span>20023 入場資格</span>
            <span>2023 繪製識別證</span>
              <span>導覽手冊</span>
              <span>跨年卡片</span>
              <span>海報</span>
              <span>抽獎資格 x2</span>
              <span>紀念貼紙</span>
              <span>餐食提供</span>
              <span>紀念卡片</span>
              <span>紀念衣服</span>
            </div>
        </div>
        <div class="flex items-center justify-center p-5">
          <span class="shadow-lg cursor-not-allowed p-3 bg-fuchsia-400 rounded text-white tracking-wider transition-all duration-200" style="user-select: none;">報名截止</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 280px;
  height: 800px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .card {
    width: 100%;
  }
}
.cardContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.cardView {
  width: 100%;
  height: 80%;

}
.card_bg {
    width: 100%;
    height: 70%;
    background-image: url("../assets/img/10004.png");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
.card_bg2 {
    width: 100%;
    height: 70%;
    background-image: url("../assets/img/10005.png");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
.card_bg3 {
    width: 100%;
    height: 70%;
    background-image: url("../assets/img/10006.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .card_title {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
}
.card_title::after {
  position: absolute;
  content: "";
  top: 0;
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.25);
}


</style>
