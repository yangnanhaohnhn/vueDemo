<template>
  <div>
    <div class="col-md-8">
      <h3 class="reply">评论回复：</h3>
      <h2 v-show="dataList.length === 0">暂无评论，点击左侧添加评论！！！</h2>
      <ul class="list-group">
        <Item
          v-for="(dataBean, index) in dataList"
          :key="index"
          :dataBean="dataBean"
          :removeItem="removeItem"
          :index="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  // import引入的组件需要注入到对象中才能使用

  // 声明接受属性:这个属性就会变成为组件对象的属性
  props: {
    dataList: Object,
    removeItem: Function
  },
  components: {Item}
}
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
