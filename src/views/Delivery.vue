<template>
  <v-container class="delivery full-height">
    <v-layout column class="full-height">
      <v-flex>
        <v-layout class="full-height display-1 dohyeon" column justify-center>
          <div>나는 안전한 택배 고민을</div>
          <div><span class="text-back">여성 안심 무인 택배함</span> 으로</div>
          <div>해결했다</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout class="full-height">
          <v-flex>
            <v-layout class="full-height" justify-center align-center>
              <v-btn text large to="/check">배송 확인</v-btn>
            </v-layout>
          </v-flex>
          <v-divider vertical />
          <v-flex>
            <v-layout class="full-height" justify-center align-center>
              <v-btn text large to="/complaint">민원 접수</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
    };
  },
  mounted () {
    console.log(this.$route.params);
    if (this.$route.params.identity && this.$store.getters.password === null) {
      this.$store.dispatch('setIdentity', {
        identity: this.$route.params.identity,
        then: () => {
          console.log(this.$store.getters.identity);
          // this.$router.push('/login');
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
