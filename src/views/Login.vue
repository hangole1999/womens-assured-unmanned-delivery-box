<template>
  <v-container class="login full-height">
    <v-layout column class="full-height">
      <v-flex>
        <v-layout class="full-height" justify-center align-center>
          <span>로그인</span>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" column justify-center align-space-between>
          <span v-text="$store.getters.identity"></span>
          <v-text-field label="비밀번호" filled clearable></v-text-field>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" justify-center align-center>
          <v-btn large block color="primary">인증</v-btn>
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
    };
  }
};
</script>

<style scoped>
</style>
