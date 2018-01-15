<template>
  <div class="index">
    <Header @login="login" @reg="reg"></Header>
    <div class="indexBody">
      <template v-if="isLogin">
        <Login></Login>
      </template>
      <template v-else>
        <Register></Register>
      </template>

    </div>
    <Footer></Footer>

  </div>
</template>

<script>

import Header from '@/components/header/Header.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLogin: true
    }
  },
  methods: {
    login(){
      this.isLogin = true
    },
    reg(){
      this.isLogin = false
    }
  },
  components: {
    Header,
    Footer,
    Login,
    Register
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indexBody{
  /*height:800px;*/

  min-height: 450px;
  width:100%;
}
.index{
  background-color: #ccc;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
