<!--  -->
<template>
<div>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span>{{dataBean.name}}</span><span>说:</span></p>
        <p class="centence">{{dataBean.content}}</p>
    </li>
</div>
</template>

<script>

export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    // 指定了属性名和属性值的类型
    dataBean: Object,
    removeItem: Function,
    index: Number
  },
  methods: {
    deleteItem(){
      const {dataBean,removeItem,index} = this
      if(window.confirm('确定要删掉'+dataBean.name+"吗?")) {
          //要移出数据
        removeItem(index)
      }
    }
  }
}
</script>
<style>

</style>
