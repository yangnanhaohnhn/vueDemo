<template>
  <div>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input
            type="text"
            class="form-control"
            placeholder="用户名"
            v-model.trim="name"
          />
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="评论内容"
            v-model.trim="content"
          ></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button
              type="button"
              class="btn btn-default pull-right"
              @click="add" >
              提交
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  props:{
    dataList : Object,
    addContent:{
      type: Function,
      required: true
    }
  },
  data() {
    return {
          name : "",
          content: ""
      }
  },
  methods: {
    add () {
        console.log(this.name+"|"+this.content);
        const name = this.name
        const content = this.content
        // const dataList = this.dataList;
        if (!name){
          alert ('用户名不能为空!')
          return
        }
        if (!content){
          alert('内容不能为空!')
          return
        }
        const dataBean = {name,content}
        // dataList.unshift(dataBean)
        this.addContent(dataBean)
    }
  }
}
</script>
<style>
.reply {
  margin-top: 0px;
}

li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
