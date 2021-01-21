<template>
  <div>
    <ul class="todo-main">
      <TodoItem v-for="(dataBean, index) in dataList" :key="index" :dataBean = 'dataBean' :index ='index' 
      :isAllChooseOp = 'isAllChooseOp' :deleteItemOp='deleteItemOp'/>
    </ul>
  </div>
</template>

<script>

import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  components:{TodoItem},
  //String，Number，Boolean，Array，Object，Date，Function，Symbol
  props:{
    dataList: Object,
    isAllChooseOp: Function,
    deleteItemOp:Function
  }
}
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
