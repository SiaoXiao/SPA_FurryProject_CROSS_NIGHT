<template>
  <header>
    <div class="header_left">
      <ul class="menu" v-if="menuArray.length !== 0">
        <li v-for="item in menuArray" :key="item.to">
          <a
            :href="item.to"
            class="text-xl font-bold tracking-wider whitespace-nowrap cursor-pointer hover:text-gray-400 transition-all duration-200"
            >{{ item.tag }}</a
          >
        </li>
      </ul>
    </div>
    <div v-if="isOpen" class="header_left_mobile"></div>
    <div v-if="isOpen" class="header_left_menu_mobile">
      <ul class="menu" v-if="menuArray.length !== 0">
        <li v-for="item in menuArray" :key="item.to" @click="isOpen = !isOpen">
          <a
            :href="item.to"
            class="text-xl font-bold tracking-wider whitespace-nowrap cursor-pointer hover:text-gray-400 transition-all duration-200"
            >{{ item.tag }}</a
          >
        </li>
      </ul>
    </div>
    <div class="header_right_mobile">
      <div id="burger" :class="{ active: isOpen }" @click.prevent="toggle">
        <slot>
          <button type="button" class="burger-button" title="Menu">
            <span class="hidden">Toggle menu</span>
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>
    </div>
  </header>
  <KeyVision></KeyVision>
  <div class="contentBox" id="review">
    <Review :timer="true" :timerDelay="5000"></Review>
  </div>
  <div class="contentBox" id="site">
    <Site></Site>
  </div>
  <div class="contentBox grid" id="card">
    <Card></Card>
  </div>
  <div class="contentBox" id="about">
    <About></About>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import KeyVision from "@/components/KeyVision.vue";
import Review from "@/components/Review.vue";
import Card from "@/components/Card.vue";
import Site from "@/components/Site.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

const menuArray = reactive([
  {
    to: "#review",
    tag: "歷屆活動",
  },
  {
    to: "#site",
    tag: "場地資訊",
  },
  {
    to: "#card",
    tag: "我要報名",
  },
  {
    to: "#about",
    tag: "關於我們",
  },
]);
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
const isCheck = () => {
  if (window.innerWidth >= 1024) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", isCheck);
});

onUnmounted(() => {
  window.removeEventListener("resize", isCheck);
});
</script>

<style lang="scss" scoped>
header {
  max-width: 1920px;
  width: 100%;
  height: 80px;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 10px 30px;
  z-index: 50;
}

.header_left {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 50px;
}

.header_left .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
}

.header_left_mobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: 0.5;
  animation: animate 0.3s linear infinite;
  animation-iteration-count: 1;
}

.header_left_menu_mobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.header_left_menu_mobile {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  border-bottom: 1px solid #fff;
}

.header_left_menu_mobile .menu {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  transition: 0.5;
  animation: animateOP 1s linear infinite;
  animation-iteration-count: 1;
}

@keyframes animate {
  0% {
    bottom: 100%;
  }

  100% {
    top: 0;
  }
}

@keyframes animateOP {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.header_right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_right_mobile {
  display: none;
}

@media (max-width: 640px) {
  .header_left .menu {
    display: none;
  }

  header .header_right {
    display: none;
  }

  header .header_right_mobile {
    display: block;
  }
}

.hidden {
  visibility: hidden;
}

/** burger **/

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 60;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

.grid {
  // width: 80%;
  // height: 100%;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 40px;
  // margin: 0 auto;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

@media (max-width: 1024px) {
  .contentBox.grid {
    // grid-template-columns: 1fr 1fr;
    
  }
}

@media (max-width: 640px) {
  .contentBox.grid {
    // grid-template-columns: 1fr;
  }
}
</style>
