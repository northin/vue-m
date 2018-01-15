<template>
  <div class="header">

    <el-row class="headerbar">
      <el-col :span="1"><div class="grid-content bg-purple header-logo">logo</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">专业音乐分析</div></el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="1" :offset="14" class="grid-content bg-purple">
        <el-dropdown>
          <el-button type="primary" icon="information">
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-information"></i>疑问</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="1" class="grid-content bg-purple">
        <el-dropdown>
          <el-button type="primary" icon="menu">
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-edit"></i>详情</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-close"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      options: [{
          value: '选项1',
          label: 'demo1'
        }, {
          value: '选项2',
          label: 'demo2'
        }],
        value: ''
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
.header{
  background: #fff;
  color: #2196F3;
}
.headerbar{
  display: flex;
  border-bottom: 1px solid #ccc;
  /*justify-content: center;*/
}
.bg-purple{
  height: 56px;
  line-height: 56px;
}
.header-logo{
  color: #fff;
  background: #2196F3
}
.el-menu-demo{
  width:60px;
  height: 56px;
  background: #fff;
}
</style>
