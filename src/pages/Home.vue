<!--  -->
<template>
  <div>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news" :dataList = 'dataList'>News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
      </ul>
        <!-- <button @push='push'>Push</button> -->
        <!-- 数据传值 -->
        <button @click="addParamToAbout">addParamToAbout</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用

export default {
  components: {},
  data(){
    return{
      dataList:[
        "1",
        "2",
        "3",
      ]
    }
  },
  methods: {
      addParamToAbout(){
        this.$router.push(
          {
            name:'about',
            params:{userId : 123}
          }
        )
      }
  }
  
};
</script>
<style>
</style>
