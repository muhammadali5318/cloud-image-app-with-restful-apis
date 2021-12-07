<template>
  
    <v-main class="main blue lighten-5 align-center">
      <v-container fluid>
        <v-row>
          <v-col
            class="mx-auto my-0 py-0"
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="8"
            xs="12"
          >
            <v-card class="form ma-auto">
              <v-toolbar color="blue darken-4" dark flat>
                <v-toolbar-title>P-Cloud</v-toolbar-title>
                <template v-slot:extension>
                  <v-tabs centered v-model="tab" align-with-title>
                    <v-tabs-slider color="white"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">
                      {{ item }}
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>

              <v-tabs-items class="form" v-model="tab">
                <v-tab-item class="form" v-for="item in comp" :key="item">
                  <v-card class="form" flat>
                    <keep-alive>
                      <component v-bind:is="item"></component>
                    </keep-alive>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

</template>

<script>
// import HelloWorld from "../components/Gallery.vue";
import SignIn from "../components/SignIn.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import SignUp from "../components/SignUp.vue";
import About from "./About.vue";
export default {
  name: "SignUpLogin",
  components: {
    // HelloWorld,
    About,
    SignIn,
    SignUp,
    ForgotPassword,
  },
  data() {
    return {
      tab: null,
      items: ["Login", "Sign Up", "Forgot Password"],
      comp: ["SignIn", "SignUp", "ForgotPassword"],
    };
  },
  methods: {},
};
</script>
<style scoped>
.main {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/rect%3e%3cpath d='M1251.7836432480362 293.1263680413138L1416.997273820892 242.7876114389939 1308.3930034381897 137.90968663430615z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M639.886%2c480.308C701.046%2c485.77%2c765.238%2c462.801%2c796.765%2c410.11C828.995%2c356.243%2c822.138%2c286.602%2c786.85%2c234.686C755.308%2c188.282%2c695.854%2c175.34%2c639.886%2c179.308C591.219%2c182.759%2c548.782%2c210.607%2c525.071%2c253.247C502.049%2c294.648%2c503.659%2c343.57%2c525.035%2c385.845C549.009%2c433.256%2c586.969%2c475.582%2c639.886%2c480.308' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M935.06%2c790.153C987.166%2c787.259%2c1021.94%2c742.419%2c1047.511%2c696.927C1072.404%2c652.641%2c1089.637%2c601.333%2c1066.663%2c556.022C1041.707%2c506.801%2c990.181%2c472.469%2c935.06%2c475.143C883.408%2c477.649%2c849.765%2c523.045%2c823.857%2c567.8C797.877%2c612.679%2c775.475%2c664.367%2c798.67%2c710.747C823.89%2c761.176%2c878.763%2c793.28%2c935.06%2c790.153' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1198.62 383.99 a156.07 156.07 0 1 0 312.14 0 a156.07 156.07 0 1 0 -312.14 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M388.87435597940515 450.670251631503L434.09524006469553 326.42689371939275 264.6309980672949 405.4493675462126z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M866.69 270.95 a149.64 149.64 0 1 0 299.28 0 a149.64 149.64 0 1 0 -299.28 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M102.81600075391023 231.1043113328147L-19.30478186991654 202.7878931601233 10.900928942198561 308.127725332775z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M417.82326834999355 71.25931922316514L519.178298115381 69.49016059780887 517.4091394900247-31.86486916757859 416.05410972463727-30.09571054222232z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M289.771%2c438.932C329.933%2c435.921%2c357.073%2c403.041%2c377.796%2c368.507C399.383%2c332.533%2c419.611%2c291.059%2c401.099%2c253.41C380.862%2c212.251%2c335.561%2c186.854%2c289.771%2c189.481C247.529%2c191.905%2c220.031%2c228.567%2c198.569%2c265.031C176.664%2c302.247%2c155.414%2c345.433%2c175.471%2c383.677C196.537%2c423.845%2c244.541%2c442.323%2c289.771%2c438.932' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1005'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 57%2c 130%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e") !important;
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>