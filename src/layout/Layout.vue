<template>
  <div class="layout">
    <div class="menu">
      <Menu/>
    </div>
    <div class="content" :class="{opened: isFold}">
      <div class="header">
        <Header/>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="footer">
       <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import {mapState} from "vuex";
export default {
  name: "Layout",
  components: {Menu, Footer, Header},
  computed: {
    ...mapState(['isFold']),
  },
}
</script>

<style scoped>
.content{
  margin-left: 60px;
  transition: margin 0.4s;
}

.content.opened{
  margin-left: 200px;
  transition: margin 0.4s;
}

.header{
  height: 80px;
  background-color: white;
}

.main{
  height: 80vh;
  background-color: grey;
}

.footer{
  padding: 0;
  margin: 0;
  height: 10vh;
  background-color: bisque;
}
</style>