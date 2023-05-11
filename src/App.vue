<script setup>
import { onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import Layout from "@/components/Layout/index.vue";

const isActive = ref(false);
const timer = ref(null)
const openUpRef = ref(null)
const openDownRef = ref(null)
const opacityRef = ref(null)
const isLoading = ref(true)

const handleScroll = () => {
  if (window.scrollY >= 100) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};
const handleScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const init = onMounted(async () => {
  // 新增滾輪監聽事件
  window.addEventListener("scroll", handleScroll);
  document.oncontextmenu = function () {
    return false;
  };
  timer.value = setInterval(()=> {
    if(document.readyState === 'complete') {
      clearInterval(timer.value)
      isLoading.value = false
      openUpRef.value.classList.add('openUP')
      openDownRef.value.classList.add('openDownRef')
      openDownRef.value.classList.add('openDownRef')
      opacityRef.value.classList.add('opacityRef')
    }
  },1000)

});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<template>
  <Layout />
  <transition-group>
    <div v-if="isLoading" ref="openUpRef" class=" fixed top-0 z-[999] w-screen h-[50vh] bg-black"></div>
    <div v-if="isLoading" ref="openDownRef" class="fixed bottom-0 z-[999] w-screen h-[50vh] bg-black"></div>
    <div v-if="isLoading" ref="opacityRef" class="fixed top-0 z-[800] w-screen h-screen  bg-white"></div>
  </transition-group>
  
  
  <div v-show="isActive" class="scrollBtn" @click.passive="handleScrollTop">
    Top
  </div>
</template>

<style>
* {
  font-family: Noto Sans TC, "sans-serif";
}

body {
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
}
.scrollBtn {
  position: fixed;
  width: 50px;
  height: 50px;
  background: #000;
  color: #fff;
  bottom: 5%;
  right: 5%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
}

.openUP {
  transition: 1s all ease;
  transform: translateY(-100%);
}

.openDownRef {
  transition: 1s all ease;
  transform: translateY(100%);
}
.opacityRef {
  transition: 1s all ease;
  transition-delay: .3s;
  opacity: 0;
}

</style>
