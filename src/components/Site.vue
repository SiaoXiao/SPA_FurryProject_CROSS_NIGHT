<template>
  <div>
    <div
      class="h-full w-full flex justify-center items-center flex-col sm:flex-row image-container"
    >
      <div class="mb-5 sm:mb-0 w-full" ref="loadingRef">
        <img
        ref="imgRef"
          src="@/assets/img/10001.jpg"
          alt="siteView"
          class="w-full h-full rounded"
          style="--i: 0s"
        />
      </div>
      <div class="flex justify-center items-center flex-col gap-2 w-full">
        <h2
        ref="titleRef"
          class="text-2xl text-gray-900 tracking-wider flex flex-col justify-center items-center" style="--i: 1s"
        >
          12/31 NIGHT
          <span ref="subTitleRef" class="text-sm text-gray-500 tracking-wider" style="--i: 1.2s">
            NIGHT PARTY
          </span>
        </h2>
        <ul ref="contentRef" style="--i: 1.5s" class="text-gray-900 tracking-wide text-base px-5">
          <li>19:30 - 20:00 毛毛扮演者 先行放置入場</li>
          <li>20:00 - 20:30 貴賓入場</li>
          <li>20:30 - 21:00 開幕會-活動介紹、投放摸彩</li>
          <li>21:00 - 22:00 DJ表演時間</li>
          <li>22:00 - 23:00 團康類活動</li>
          <li>24:00 - 01:00 抽獎、閉幕，活動結束</li>
        </ul>
      </div>
    </div>

    <div
       class="max-w-screen-xl h-full w-full flex justify-center items-center flex-col-reverse sm:flex-row mt-5"
    >
      <div class="flex justify-center items-center flex-col gap-2 w-full">
        <h2 class="text-2xl text-gray-900 tracking-wider" ref="titleRef2" style="--i: 1s">活動場地</h2>
        <span class="text-sm text-gray-500 tracking-wider" ref="subTitleRef2" style="--i: 1.2s">
          玩劇島小劇場 Little Play
        </span>

        <a
          href="https://www.littleplaytaichung.com/"
          target="_blank"
          ref="contentRef2" style="--i: 1.5s"
          class="mt-5 text-white bg-gray-900 py-3 px-5 rounded shadow-lg hover:bg-gray-600 transition-all duration-500"
          >關於場地</a
        >
      </div>
      <div class="mb-5 sm:mb-0 w-full">
        <img
        ref="imgRef2"
          src="@/assets/img/10014.jpg"
          alt="siteView"
          class="w-full h-full rounded"
          style="--i: 0s"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "@vue/runtime-core";
const imgRef = ref(null);
const imgRef2 = ref(null);
const loadingRef = ref(null);
const titleRef = ref(null);
const subTitleRef = ref(null);
const titleRef2 = ref(null);
const subTitleRef2 = ref(null);
const contentRef = ref(null);
const contentRef2 = ref(null);

const options = {
  root: document.querySelector(".image-container"),
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
  delay: 100,
};
const callback = ([entry]) => {
  if (entry && entry.isIntersecting) {
    imgRef.value.classList.add("fade");
    titleRef.value.classList.add("fade");
    subTitleRef.value.classList.add("fade");
    contentRef.value.classList.add("fade");
    imgRef2.value.classList.add("fade");
    titleRef2.value.classList.add("fade");
    subTitleRef2.value.classList.add("fade");
    contentRef2.value.classList.add("fade");
  }
};

const observer = new IntersectionObserver(callback, options);

const init = onMounted(async () => {
  observer.observe(loadingRef.value);
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<style lang="scss" scoped>
.fade {
  opacity: 0;
  transition: 0.5;
  animation: animate 1s ease;
  animation-iteration-count: 1;
  animation-delay: var(--i);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

