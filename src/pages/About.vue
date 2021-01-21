<!--  -->
<template>
  <div>
    <h2>About</h2>
    <br>
    {{userId}}
    </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用

export default {
  name: "about",
  components: {},
  data(){
    return{
      userId:''
    }
  },
  mounted () {
    this.userId = this.$route.params.userId
  }
};
</script>
<style>
</style>
