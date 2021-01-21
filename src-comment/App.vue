<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对我自己的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :dataList = 'dataList' :addContent = 'addContent'/>
      <List :dataList = "dataList" :removeItem= 'removeItem'/>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
// 组件间传值:
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  // 引入的組件
  components: {Add, List},
  data () {
    return {
      dataList: [
        {name: 'xx', content: 'xxxxx'},
        {name: 'xxxxx', content: 'xxssssssxxx'}
      ]
    }
  },
  methods: {
    addContent(dataBean) {
      this.dataList.unshift(dataBean)
    },
    removeItem(index) {
      this.dataList.splice(index, 1)
    }
  }
}
</script>
<style>

</style>
