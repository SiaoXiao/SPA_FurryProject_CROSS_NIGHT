<template>
  <div
    class="max-w-screen-xl h-full w-full flex justify-center items-center flex-col-reverse sm:flex-row mb-10 ovo"
  >
    <div class="flex justify-center items-center flex-col gap-2 w-full">
      <h2
        ref="titleRef"
        class="text-2xl text-gray-900 tracking-wider"
        style="--i:1s"
      >
        關於團隊
      </h2>
      <span
        ref="subTitleRef"
        class="text-sm text-gray-500 tracking-wider"
        style="--i:1.2s"
      >
        ABOUT ME
      </span>
      <div ref="contentRef" style="--i:1.5s">
        <p class="text-base text-gray-900 tracking-wider">
          我們是
          <a
            href="https://www.facebook.com/CrossNightFurry?eid=ARDh4oTXrE9Pv0iRaq80TfipPk9TRL8x7g2x7qgWspo490kcZfShZePbdnEV3RDWC1JRfnbYPbD0VaVz&hc_ref=ARQTMSQ2wbRd0lOaps2HfOGnd3Ug2yZ9wVrycKRYGhpZAglHXRa7H_9imyzVjPQR624&fref=nf&__xts__[0]=68.ARBWnzU_pDlo5UXzSMNMMDhWBAq024FIZ-Otq6yfg3hpHskmexVa7w3HF9PtxdLjEL41nRqWitejUgtflJ_WNpvw9pjKJVvH2EqQw3ZC0rPcCiGrkyF_4TfOHFs0rx3HObzFmtEmhWb763aYvX23ipC87cmHvosLOL-v1h24hi1Um9JASHWcUxbr2Mm_bHXjvROE1kTKVrbmR4I5xPOJL_wq7xACV9nKRnnrgiCFRdx3bpxBkgPL7KaV3BkMyNzUKbx9_l0wm_dZaY8KxlTuqkLXYI7GWp1OvfqRLy2poTFt6T6HC3lNcQPk70-xScVL1r4"
            target="_blank"
            class="font-bold text-fuchsia-400 tracking-wider text-lg"
            >Cross Night Furry</a
          >
          -
          是以台灣中部Furry活動的小組，我們帶來更多活動，為此推廣台灣Furry的生態。
          我們原至一間餐廳，轉變而成的中小型聚會活動。
        </p>
        <br />
        <p class="text-base text-gray-900 tracking-wider">
          希望大家能夠共同體驗，當年最後一天的聚會。
        </p>
      </div>
    </div>
    <div class="mb-5 sm:mb-0 w-full" ref="loadingRef">
      <img
        ref="imgRef"
        src="@/assets/img/about.jpg"
        alt="siteView"
        class="w-full h-full"
        style="--i:0s"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "@vue/runtime-core";
const imgRef = ref(null);
const loadingRef = ref(null);
const titleRef = ref(null);
const subTitleRef = ref(null);
const contentRef = ref(null);

const options = {
  root: document.querySelector(".ovo"),
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
  // animation: name | duration | timing-function | delay | iteration-count direction | fill-mode | play-state;
  animation: animateMove 1s ease var(--i) 1 forwards;
}

@keyframes animateMove {
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
