<template>
  <div class="header">
    <el-row>
      <el-col :span="4" :offset="2"><div class="grid-content bg-purple">logo</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">B</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">C</div></el-col>
      <el-col :span="4" :offset="1">
        <div class="grid-content bg-purple">
          <el-autocomplete
             class="inline-input"
             v-model="state1"
             :fetch-suggestions="querySearch"
             placeholder="请输入内容"
             @select="handleSelect"
           ></el-autocomplete>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple" @click="loginDiv">登录</div></el-col>
    </el-row>

    <el-dialog title="登录" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <el-form-item label="email" :label-width="labelWidth" prop="email" :rules="[
          {required: true, message: '请输出邮箱'}
        ]">
          <el-input v-model="form.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="password" :label-width="labelWidth"  prop="password" :rules="[
          {required: true, message: '请输出密码'},
          {type: 'number', message: '请输入数字'}
        ]">
          <el-input v-model.number="form.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="login('form')">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      restaurants: [],
      state1: '',
      dialogFormVisible: false,
      labelWidth: '25%',
      form:{
        email:'',
        password:''
      }
    }
  },
  methods: {
    querySearch(queryString,cb){
      var restaurants = this.restaurants;

      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString){
      return (restaurants) => {
        return (restaurants.value.indexOf(queryString))
      }
    },
    handleSelect(item){
        console.log(item)
    },
    loadAll(){
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
      ]
    },
    loginDiv(){
      this.dialogFormVisible = true
    },
    login (forname) {
      this.$refs[forname].validate((valid) => {
        if(valid){
          this.$store.dispatch('login', {email: this.form.email,password: this.form.password})
        }else{
          return false
        }
      })
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-purple{
    height: 80px;
    background-color: #fff;
}

</style>
