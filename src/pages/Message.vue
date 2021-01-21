<!--  -->
<template>
  <div>
    <h2>Message</h2>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/message/detail?id=${m.id}`">
        {{ m.title }}
        </router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
      <hr />
    </ul>
    <button @click="$router.back()">回退</button>
    <router-view></router-view>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用

export default {
  components: {},
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      const message = [
        { id: 1, title: "Message001" },
        { id: 3, title: "Message003" },
        { id: 5, title: "Message005" },
      ];
      this.messages = message;
    }, 1000);
  },
  methods: {
    pushShow(id) {
        //   this.$router.push(`/home/message/detail/${id}`);
      this.$router.push(`/home/message/detail?id=${id}`);
      this.$emit('push',this.messages)
    },
    replaceShow(id) {
    //   this.$router.replace(`/home/message/detail/${id}`);
      this.$router.replace(`/home/message/detail?id=${id}`);
    },
  },
};
</script>
<style>
</style>
