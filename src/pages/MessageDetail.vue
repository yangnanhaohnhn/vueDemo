<!--  -->
<template>
  <div>
    <h2>MessageDetail</h2>
    <ul>
      <li>{{fullPath}}</li>
      <li>{{name}}</li>
      <li>{{params}}</li>
      <li>{{path}}</li>
      <li>{{query}}</li>
    </ul>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用

export default {
  components: {},
  data(){
      return{
          fullPath:'',
          name:'',
          params:'',
          path:'',
          query:''
      }
  },
  mounted(){
      const res = this.$route
      console.log(res);
      this.fullPath = res.fullPath
      this.name = res.name
      this.params = res.params
      this.path = res.path
      this.query = res.query
  }
};
</script>
<style>
</style>
