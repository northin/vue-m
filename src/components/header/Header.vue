<template>
  <div class="header">
    <el-row class="headerbar">
      <el-col :span="3"><div class="grid-content bg-purple">音乐分析</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">首页</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">报告</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">活动</div></el-col>
      <el-col :span="4" :offset="2" class="grid-content bg-purple">
        <el-button @click=login>登录</el-button>
        <el-button @click=reg>注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {

    }
  },
  methods: {
    login:function(){
      this.$emit('login')
    },
    reg:function(){
      this.$emit('reg')
    }

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background: #3b485b;
  color: #fff;
}
.headerbar{
  display: flex;
  justify-content: center;
}
.bg-purple{
  height: 56px;
  line-height: 56px;
}
</style>
