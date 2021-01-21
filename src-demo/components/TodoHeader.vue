<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodoContent"/>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  data () {
    return {
      title: ''
    }
  },
  // props: {
  //   addDataList: Function
  // },
  methods: {
    addTodoContent () {
      const {title,addDataList} = this
      if (!title) {
        alert('名称不能为空!')
        return
      }
      const dataList = {
        title, isCheck: false
      }
      // addDataList(dataList)
      // 2.展示一下自定义事件处理
      this.$emit('addDataList', dataList)
      this.title = ''
    }
  }
}
</script>

<style>
/*header*/ 
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
