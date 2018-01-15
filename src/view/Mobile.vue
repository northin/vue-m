<template>
  <div class="moblie">

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>


  </div>
</template>

<script>
import Vue from 'vue'

import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
export default {
  name: 'Moblie',
  data () {
    return {
      username:''
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
