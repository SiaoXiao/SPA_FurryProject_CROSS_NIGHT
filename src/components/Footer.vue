<template>
    <footer class="w-full h-full flex items-center justify-between flex-col">
      <div class="skinny">
        <span>{{ text }}</span>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const date = new Date();
      const year = date.getFullYear();
      const text = ref(`SiaoSiao Copyright © ${year}. All Rights Reserved.`);
      return {
        text,
      };
    },
  };
  </script>
  
  <style scoped>
  footer {
    padding: 10px 30px;
    background: rgba(0, 0, 0, 0.7);
  }


  
  .skinny {
    position: relative;
    letter-spacing: 1px;
    font-size: 14px;
    color: #d1d5db;
    text-align: center;
    width: 100%;
    padding: 10px 0;
  }
  .skinny::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.25);
  }

  </style>
  