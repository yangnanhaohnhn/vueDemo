<!--  -->
<template>
  <div>
    <App2 @ScrollEnd="getDataList"></App2>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用
import App2 from "./App2";
export default {
  components: { App2 },
  methods: {
    getDataList(val) {
    //   console.log(val);
    },
  },
};
</script>
<style>
</style>
