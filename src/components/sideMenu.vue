<template>
  <div class="sideMenu">
     <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
       <el-menu-item-group title="歌曲评论分析">
         <el-menu-item index="1"><i class="el-icon-message" @click="test"></i>歌曲排名分析</el-menu-item>
         <el-menu-item index="2"><i class="el-icon-message"></i>歌曲评论分析</el-menu-item>
       </el-menu-item-group>
       <el-menu-item-group title="歌曲歌词分析">
         <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
         <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
       </el-menu-item-group>
     </el-menu>
  </div>
</template>

<script>

export default {
  name: 'sideMenu',
  data () {
    return {

    }
  },
  methods: {
    test: function(){
      // this.$store.dispatch("test");
    }

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo{
  height: 100%;
}
</style>
