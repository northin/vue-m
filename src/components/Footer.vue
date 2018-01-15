<template>
  <div class="footer">
    <el-row class="footerbar">
      <el-col :span="2"><div class="grid-content bg-purple">关于我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">开发者</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">联系我们</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">下载</div></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'footer',
  data () {
    return {

    }
  },
  methods: {


  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerbar{
  display: flex;
  justify-content: center;
}
.bg-purple{
  height: 36px;
  line-height: 36px;
}
</style>
