<template>
  <div class="slide">
    <h2 class="text-2xl text-gray-900 tracking-wider">歷屆活動</h2>
    <transition-group
      tag="div"
      class="slide-main h-[300px] sm:h-[600px]"
      :name="transType"
    >
      <img
        v-for="(item, idx) in welfare"
        :key="item.id"
        v-show="imgIdx === idx"
        :src="getImageUrl(item.src)"
      />
    </transition-group>

    <div class="slide-ctrl">
      <div
        class="slide-prev flex justify-center items-center"
        @click="slideCtrl(-1)"
      >
        <IconChevronLeft class="w-8 h-8 text-white" />
      </div>
      <div
        class="slide-next flex justify-center items-center"
        @click="slideCtrl(1)"
      >
        <IconChevronRight class="w-8 h-8 text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import IconChevronLeft from "~icons/heroicons-outline/chevron-left";
import IconChevronRight from "~icons/heroicons-outline/chevron-right";

const props = defineProps({
  timer: {
    type: Boolean,
    default: false,
  },
  timerDelay: {
    type: Number,
    default: 1000,
  },
});
const imgIdx = ref(0);
const transType = ref("next");
const clickWait = ref(false);
const timer = ref(null);
const welfare = ref([
  { id: "1", src: "review_01" },
  { id: "2", src: "review_02" },
  { id: "3", src: "review_03" },
  { id: "4", src: "review_04" },
  { id: "5", src: "review_05" },
  { id: "6", src: "review_06" },
  { id: "7", src: "review_07" },
]);

function getImageUrl(name) {
  return new URL(`../assets/img/review/${name}.jpg`, import.meta.url).href;
}

const setTime = () => {
  timer.value = setInterval(() => {
    clickWait.value = false;
    slideCtrl(1);
  }, props.timerDelay);
};

const stopTime = () => {
  clearInterval(timer.value);
};

const slideCtrl = (slidesToShow = 1) => {
  if (clickWait.value) return;
  if (props.timer) stopTime();

  clickWait.value = true;

  if (slidesToShow > 0) {
    transType.value = "next";
    const shiftItem = welfare.value.shift();
    welfare.value.push(shiftItem);
    if (props.timer) setTime();
    clickWait.value = false;
    return;
  }

  if (slidesToShow < 0) {
    transType.value = "prev";
    const shiftItem = welfare.value.pop();
    welfare.value.unshift(shiftItem);
    if (props.timer) setTime();
    clickWait.value = false;
    return;
  }
};

const init = onMounted(() => {
  if (props.timer) setTime();
});
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .slide-main {
    position: relative;
    width: 100%;

    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  .slide-ctrl {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    div {
      transition: all 0.3s ease;
      cursor: pointer;
      // display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      // margin: 5px;
      // line-height: 50px;
      // color: #fff;
      user-select: none;
      background: #111827;

      // text-decoration: none;
      &:hover,
      &:active {
        color: #fff;
        background-color: #475569;
      }
    }
  }
}

// 動畫設定_下一頁
.next-leave-active,
.next-enter-active {
  transition: all 1s ease;
}
.next-enter-from,
.next-leave-to {
  opacity: 0;
}
.next-enter-to,
.next-leave-from {
  opacity: 1;
}
.next-enter-from {
  transform: translateX(-100%);
}
.next-leave-to {
  transform: translateX(100%);
}

// 動畫設定_上一頁
.prev-leave-active,
.prev-enter-active {
  transition: all 1s ease;
}
.prev-enter-from,
.prev-leave-to {
  opacity: 0;
}
.prev-enter-to,
.prev-leave-from {
  opacity: 1;
}
.prev-enter-from {
  transform: translateX(100%);
}
.prev-leave-to {
  transform: translateX(-100%);
}
</style>
