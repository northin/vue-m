<template>
  <div class="index">
    <Header></Header>
    <el-row class="tac" >
      <el-col :span="3" class="side">
        <sideMenu></sideMenu>
      </el-col>
      <el-col :span="21" class="content">
        <demo1></demo1>
      </el-col>
    </el-row>


  </div>
</template>

<script>

import Header from '@/components/header/HeaderBody.vue'
import sideMenu from '@/components/sideMenu.vue'
import demo1 from '@/view/demo1.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    sideMenu,
    demo1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  height: 100%;
}
.tac{
  height: 100%;
}
.side,.sideMenu{
  height: 100%;
  border-right: 1px solid #ccc;
}
.content{
  background-color: #F2F3F8;
  height: 100%;
  overflow: scroll;
}
</style>
