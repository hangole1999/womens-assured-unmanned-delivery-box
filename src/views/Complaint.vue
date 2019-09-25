<template>
  <v-container class="complaint full-height">
    <v-layout column class="full-height">
      <v-flex>
        <v-layout class="display-1 dohyeon" column justify-center>
          <div>민원 사항이 있나요?</div>
          <div><span class="text-back">여성 안심 무인 택배함</span> 에게</div>
          <div>민원을 제출해봐요</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-textarea name="complaint" label="민원 내용" value="" v-model="complaint" filled auto-grow clearable autofocus></v-textarea>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" justify-center align-center>
          <v-btn class="dohyeon" large block color="primary" @click="submit">민원 제출</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Complaint',
  data () {
    return {
      complaint: ''
    };
  },
  methods: {
    submit () {
      let body = {
        account: this.$store.getters.identity,
        problem: this.complaint
      };
      console.log(this.complaint);
      console.log(body);
      // this.$http.post('http://fintechlabml.gachon.ac.kr/send', body).then((response) => {
      //   console.log(response);
      //   if (response.data.state) {
      //     this.$router.push('/delivery');
      //   }
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
