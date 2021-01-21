<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">

        <!-- <TodoHeader :addDataList='addDataList'/> -->
        <!-- 1.展示一下自定义事件处理  只能用于子父组件之间-->
        <TodoHeader @addDataList='addDataList'/>

        <TodoList :dataList='dataList' :deleteItemOp='deleteItemOp'/>

        <TodoFooter :dataList='dataList' :setAllChooseOp = 'setAllChooseOp' :deleteChooseDataOp ='deleteChooseDataOp'
          />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'
import localStorage from './utils/localStorageUtil'

export default {
  components: {
    TodoHeader, TodoFooter, TodoList
  },
  data () {
    return {
      dataList: localStorage.getListValue('dataListKey')
    }
  },
  methods: {
    addDataList (dataBean) {
      this.dataList.unshift(dataBean)
    },
    setAllChooseOp (isAllChoose) {
      this.dataList.forEach(function(item){
        item.isCheck = isAllChoose
      })
    },
    deleteItemOp(index){
      this.dataList.splice(index,1)
    },
    //删除选中的数据,删除掉isCheck===true的数据
    deleteChooseDataOp(){
      console.log("start:"+this.dataList);
      //  this.dataList =  this.dataList.filter(item=>!item.isCheck)
      this.dataList = this.dataList.filter((item) =>{
        return item.isCheck === false
      })
     console.log("end:"+this.dataList);
    }
  },
  watch:{
    //监视
    dataList:{
      deep:true,
      handler:function(newValue){
        //将最新的值保存到localStorage
        localStorage.putListValue('dataListKey',JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}


/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
