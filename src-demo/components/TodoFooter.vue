<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChooseChange"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{dataList.length}}
        </span>
    <button class="btn btn-danger" @click="deleteOp" v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    dataList: Array,
    setAllChooseOp: Function,
    deleteChooseDataOp:Function
  },
  methods:{
    deleteOp(){
      this.deleteChooseDataOp()
    }
  },
  computed:{
    completeSize(){
      return this.dataList.reduce((preTotal, dataBean) => preTotal + (dataBean.isCheck ? 1:0 ),0)
    },
    isAllChooseChange: {
      get(){
         return this.completeSize === this.dataList.length &&
          this.dataList.length > 0
      },
      set(value){
        //value 是boolean类型,是checkbox最新的值
        this.setAllChooseOp(value)
      }
    }
  }
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
