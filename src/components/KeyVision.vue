<template>
  <main
    ref="mainRef"
    class="w-full h-screen bg bg-center bg-no-repeat bg-cover overflow-hidden bg-keyVision_mb lg:bg-keyVision"
  >
    <div ref="titleRef" class="title flex justify-center items-center flex-col">
      <h1 class="font-PoP">CROSS NIGHT</h1>
      <h2>FURRY PARTY</h2>
      <span>Saturday 12.31.2023</span>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
const mainRef = ref(null);
const titleRef = ref(null);
onMounted(() => {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    mainRef.value.classList.remove("bg-fixed");
    titleRef.value.classList.remove("web");
  } else {
    mainRef.value.classList.add("bg-fixed");
    titleRef.value.classList.add("web");
  }
});
</script>

<style lang="scss" scoped>
.title {
  padding-top: 100px;
  h1 {
    font-size: 13vw;
    color: #fff;
    user-select: none;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
  h2 {
    font-size: 10vw;
    color: #fff;
    user-select: none;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
  span {
    display: block;
    font-size: 5vw;
    color: black;
    user-select: none;
    font-weight: 800;
    text-align: center;
    text-shadow: shadow1, shadow2, shadow3;
    text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
  }
}

@media (max-width: 640px) {
  .title {
    height: 100%;
    padding: 50% 0;
  }
  .web {
    background: #000;
    mix-blend-mode: multiply;
  }

  header .header_right {
    display: none;
  }
}
</style>
