<template>
  <div class="login">

    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-ruleForm">
      <h3 class="login-title">登录</h3>
      <el-form-item label="电子邮箱:" prop="email">
        <el-input style="width:222px;margin-left:-36px" v-model="loginForm.email" placeholder="电子邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input style="width:222px;margin-left:-36px" type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="margin:30px 0 20px 66px;">
        <el-button type="primary" @click="submitForm('loginForm')">确认</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      loginForm:{
        email:'',
        password:''
      },
      rules: {
         email: [
           { required: true, message: '请输入电子邮箱', trigger: 'blur' },
           { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
         ],
         password: [
           { required: true, message: '请输入密码', trigger: 'blur' },
           { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
         ],
       }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch("login",{email:this.loginForm.email,password:this.loginForm.password})
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  background: #fff;
  border: 1px solid #ccc;
  width:360px;
  height:360px;
  margin:80px auto 0;

}
.login-title{
  margin: 50px;
}
.login-ruleForm{

}
</style>
