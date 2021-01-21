<!--  -->
<template>
<div>
    <div v-if="!url">loading</div>
    <div v-else>嘿嘿嘿<a :href="url">{{name}}</a></div>
</div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用
import axios from 'axios'

export default {
  data () {
      return{
          url:'',
          name:''
      }
  },
  mounted (){
      const url = 'https://api.github.com/search/repositories?q=vue&sort=stars'
      axios.get(url).then(
          result => {
            console.log(result)
            const data = result.data.items
            this.name = data[0].name
            this.url = data[0].html_url
          }
      ).catch(err => {
          alert('请求失败')
      })

  }
}
</script>
<style>

</style>
