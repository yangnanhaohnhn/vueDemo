<!--  -->
<template>
  <div class="seamless">
    <div :style="pos" id="realBox">
      <div style="overflow: hidden">
        <p v-for="(item, index) in dataList" :key="index">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </p>
      </div>
      <div style="overflow: hidden">
        <p v-for="(item, index) in dataList" :key="index">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用
import arrayEqual from "../utils/arrayEqual";
export default {
  data() {
    return {
        //动画效果的transition移动
      yPos: 0,
      step: 0.1,//速度 越大越快,主要用于 this.yPos - step 
      realBoxHeight: 0,//外层div的高度
      limitMoveNum: 1,//多少个数据能移动
      dataList: [//修改数据的时候 要修改一下下面的高度
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          date: "2017-12-16",
        },
      ],
    };
  },
  methods: {
    _initMove: function _initMove() {
      var _this = this;

    //   this.$nextTick(function () {
        _this._dataWarm(_this.dataList);

        if (_this.scrollSwitch) {
       
        setTimeout(function () {
             _this.realBoxHeight = document.getElementById('realBox').offsetHeight;
            _this._move();
          }, 0);
        }
    //   });
    },
    //判断数据是否超过了100个
    _dataWarm: function _dataWarm(data) {
      if (data.length > 100) {
        console.warn(
          "\u6570\u636E\u8FBE\u5230\u4E86" +
            data.length +
            "\u6761\u6709\u70B9\u591A\u54E6~,\u53EF\u80FD\u4F1A\u9020\u6210\u90E8\u5206\u8001\u65E7\u6D4F\u89C8\u5668\u5361\u987F\u3002"
        );
      }
    },
    _move: function _move() {
        //
      this.reqFrame = requestAnimationFrame(
        function () {
          var _this3 = this;
          var h = this.realBoxHeight / 2;
          var step = this.step;
          if (Math.abs(this.yPos) >= h) {
            this.$emit("ScrollEnd",this.dataList);
            this.yPos = 0;
          }
          this.yPos -= step;
          this._move();
        }.bind(this)
      );
    },
    _cancle: function _cancle() {
      cancelAnimationFrame(this.reqFrame || "");
    },
    reset: function reset() {
      this._cancle();
      this._initMove();
    },
  },
  computed: {
    pos: function pos() {
      return {
        transform: "translate(0px," + this.yPos + "px)",
        // transition: "all " + this.ease + " " + this.delay + "ms",
        overflow: "hidden",
      };
    },
    //判断数据是否超过了你设定的最低滑动数据
    scrollSwitch: function scrollSwitch() {
      return this.dataList.length >= this.limitMoveNum;
    },
  },
  beforeCreate: function beforeCreate() {
    this.reqFrame = null;
    // this.singleWaitTime = null;
    // this.isHover = false;
    // this.ease = "ease-in";
  },
  beforeDestroy: function beforeDestroy() {
    this._cancle();
    // clearTimeout(this.singleWaitTime);
  },
  mounted: function mounted() {
    this._initMove();
  },
  watch: {
    dataList: function data(newData, oldData) {
      this._dataWarm(newData);

      if (!arrayEqual(newData, oldData)) {
        this.reset();
      }
    },
  },
};
</script>
<style>
.seamless {
/* 这个高度主要是数据的高度 */
  height: 150px;
  overflow: hidden;
}
</style>
