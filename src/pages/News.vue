<!--  -->
<template>
  <div>
    <h2>News</h2>

    <ul>
      <li v-for="(news, index) in dataList" :key="index">{{ news }}</li>
    </ul>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用

export default {
  props:{
    dataList:Array
  },
  components: {},
  data() {
    return {
      newsArr: ["New1", "New2", "New3", "New4"],
    };
  },
};
</script>
<style>
</style>
