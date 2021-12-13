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
                <v-toolbar-title>pCloud</v-toolbar-title>
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
background-image: radial-gradient(circle, #dde6f2, #dbe5f4, #dae4f7, #d9e3f9, #d9e2fb);
}
.form {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
</style>