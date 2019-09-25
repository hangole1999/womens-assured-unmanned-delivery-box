<template>
  <v-container class="login full-height">
    <v-layout column class="full-height">
      <v-flex>
        <v-layout class="full-height display-1 dohyeon" column justify-center>
          <div><span class="text-back">여성 안심 무인 택배함</span> 을</div>
          <div>이용하기에 앞서,</div>
          <div>고객님의 안전을 위해</div>
          <div>비밀번호를 입력받을께요 !</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" column justify-center align-space-between>
          <div class="dohyeon"><span v-text="$store.getters.identity" /> 에 해당하는 비밀번호를 입력해주세요</div>
          <v-text-field label="비밀번호" v-model="password" type="password" filled clearable autofocus></v-text-field>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" justify-center align-center>
          <v-btn class="dohyeon" large block color="primary" @click="login">인증</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      password: ''
    };
  },
  methods: {
    login () {
      let body = {
        account: this.$store.getters.identity,
        password: this.password
      };
      console.log(this.password);
      console.log(body);
      // this.$http.post('http://fintechlabml.gachon.ac.kr/login', body).then((response) => {
      //   console.log(response);
      // }).catch((error) => {
      //   console.log('error');
      //   console.log(error);
      // }).finally(() => {
      //   console.log('finally');
      // });
      this.$router.push('/delivery');
    }
  }
};
</script>

<style scoped>
</style>
