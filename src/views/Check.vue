<template>
  <v-container class="check full-height">
    <v-layout column class="full-height">
      <v-flex>
        <v-layout class="full-height display-1 dohyeon" column justify-center>
          <div>고객님의</div>
          <div><span class="text-back">여성 안심 무인 택배함</span></div>
          <div>현황입니다</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height display-1 dohyeon" column justify-center>
          <div>성함: {{this.name}}</div>
          <div>종류: {{this.type}}</div>
          <div>목적지: {{this.destination}}</div>
          <div>수취 확인: {{this.receive ? '수취 완료' : '수취 이전'}}</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height" justify-center align-center>
          <v-btn class="dohyeon" large block color="primary" @click="receiveDelivery" :disabled="receive">수취 확인</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Check',
  data () {
    return {
      name: '',
      type: '',
      destination: '',
      receive: false
    };
  },
  methods: {
    receiveDelivery () {
      // this.$http.post('http://fintechlabml.gachon.ac.kr/receive', body).then((response) => {
      //   console.log(response);
      //   if (response.data.state) {
      //     this.receive = response.data.state;
      //   }
      // }).catch((error) => {
      //   console.log('error');
      //   console.log(error);
      // }).finally(() => {
      //   console.log('finally');
      // });
      this.receive = true;
      // this.$router.push('/delivery');
    }
  },
  mounted () {
    let body = {
      account: this.$store.getters.identity
    };
    console.log(body);
    // this.$http.post('http://fintechlabml.gachon.ac.kr/search', body).then((response) => {
    //   console.log(response);
    //   if (response.data.length === 4) {
    //     this.name = response.data[0];
    //     this.type = response.data[1];
    //     this.destination = response.data[2];
    //     this.receive = response.data[3];
    //   }
    // }).catch((error) => {
    //   console.log('error');
    //   console.log(error);
    // }).finally(() => {
    //   console.log('finally');
    // });
    this.name = '김민경';
    this.type = '옷';
    this.destination = '방배동';
    this.receive = false;
  }
};
</script>

<style scoped>
</style>
