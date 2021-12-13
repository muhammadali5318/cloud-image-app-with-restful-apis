<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose:  this file View/SignIn.vue is responsible for user authentication and login into the system -->


<template>
  <v-form ref="form" class="pa-5 rounded form">
    <div class="img-container mb-12">
      <!-- <img src="../assets/shopify.png" alt="" /> -->
    </div>
    <h3>Forgot Password? Don't Worry just write your email</h3>
    <v-spacer></v-spacer>
    <p class="grey--text text--darken-2 font-weight-light">
      One of the best Cloud Image plateform made for you.
    </p>

    <v-text-field
      v-model="userEmail.email"
      placeholder="Email"
      append-icon="mdi-email"
      :rules="emailRule"
      :hint="getTesting"
      ref="email"
    ></v-text-field>

    <v-btn :loading="getLoadingStatus" class="white--text blue darken-4 px-4" elevation="2" @click="submit"
      >Reset</v-btn
    >

    <v-snackbar top centered color="red" :value="getSnackbarStatus" timeout="2000">
      <span class="group">
        {{ getSnackbarErrorMsg }}
        <v-icon dark>mdi-check-decagram-outline </v-icon>
      </span>
    </v-snackbar>
  </v-form>
</template>

<script>
import { emailRule, passwordRules } from "../validation/validation.js";
import {mapGetters} from "vuex"

export default {
  name: "FortgotPassword",

  data() {
    return {
      userEmail: {

        email: "",
      },
      snackbar: false,
      // text: "Invalid Credentials",
      emailRule: emailRule,
      passwordRules: passwordRules,
      emailHint: null,
      show1: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        
        if(this.getTesting != ""){
          // console.log("empty");
        this.$refs.email.focus();
        }
          this.$store.dispatch("postForgotPasswordData",this.userEmail);


        this.snackbar = true;
      } else {
        alert("else");
      }
    },
  },
    computed: {
    // this.$router.push({ name: "Home" });
    ...mapGetters(["getSnackbarStatus"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
    ...mapGetters(["getTesting"]),
            ...mapGetters(["getLoadingStatus"]),

  },
  // computed: {
  //   ...mapState({ msg: (state) => state.SignUp.message }),
  // },
  mounted() {
    document.title = "Forgot Password";
  },
};
</script>


<style scoped>
.wrapper {
  /* background: url("../assets/back.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: auto;
}
.main {
  width: 100vw;
  height: 100vh;
}

.form {
  background-color: rgba(255, 255, 255, 0.9);
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>