<template>
  <div class="register">

    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="register-ruleForm">
      <h3 class="register-title">注册</h3>
      <el-form-item label="电子邮箱:" prop="email">
        <el-input style="width:222px;margin-left:-36px" v-model="registerForm.email" placeholder="电子邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input style="width:222px;margin-left:-36px" type="password" v-model="registerForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="confirmPassword">
        <el-input style="width:222px;margin-left:-36px" type="password" v-model="registerForm.confirmPassword" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item style="margin:30px 0 20px 66px;">
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      registerForm:{
        email:'',
        password:'',
        confirmPassword: ''
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
            alert('submit!');
          } else {
            console.log('error submit!!');
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
.register{
  background: #fff;
  border: 1px solid #ccc;
  width:360px;
  height:360px;
  margin:80px auto 0;

}
.register-title{
  margin: 50px;
}
.register-ruleForm{

}
</style>
