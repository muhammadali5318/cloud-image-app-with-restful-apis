
    <!-- 
System: Image Cloud App
Developer: Muhammad Ali
Date: Dec 13, 2021
Organization: Programmer Force
Purpose:  this file View/SignIn.vue is responsible for user authentication and login into the system -->
 -->


<template>
  <v-form ref="form"  class="pa-5 rounded form">
    <div class="img-container mb-12">
    </div>
    <h2>Login to pCloud</h2>
    <v-spacer></v-spacer>
    <p class="grey--text text--darken-2 font-weight-light">
      One of the best Cloud Image plateform made for you
    </p>

    <v-text-field
      v-model="user.email"
      placeholder="Email"
      append-icon="mdi-email"
      :rules="emailRule"
      :hint="emailHint"
      ref="email"
    ></v-text-field>

    <v-text-field
      v-model="user.password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      placeholder="Password"
      :rules="passwordRules"
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn class="white--text blue darken-4 px-4" :loading="getLoadingStatus" elevation="2" @click="submit"
      >Login</v-btn
    >

    <v-snackbar top centered color="red" v-model="snackbar" timeout="2000">
      <span class="group">
        {{ text }}

        <v-icon dark>mdi-check-decagram-outline </v-icon>
      </span>
    </v-snackbar>

    <p class="mt-5 font-weight-light">
      Don't have a pCloud id?
      <router-link to="/"> Sign Up </router-link>
    </p>

 <!-- *****************snack for error messages r********************** -->
    <v-snackbar top centered :color="getSnackbarColor" :value="getSnackbarStatus" timeout="3000">
      <span class="group">
        {{ getSnackbarErrorMsg }} 

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>

  </v-form>
</template>

<script>
import { emailRule, passwordRules } from "../validation/validation.js";
import { mapGetters } from "vuex";

export default {
  name: "SignIn",

  data() {
    return {
      status: this.getSignInSnackbarStatus,
      user: {
        email: "",
        password: "",
      },
      snackbar: false,
      text: "Invalid Credentials",
      emailRule: emailRule,
      passwordRules: passwordRules,
      emailHint: null,
      show1: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
     
        this.$store.dispatch("updateSnackBarStatus",false);
        this.$store.dispatch("postSignInData",this.user);

     }
    },
  },
  computed: {
        ...mapGetters(["getSnackbarStatus"]),
        ...mapGetters(["getSnackbarErrorMsg"]),
        ...mapGetters(["getSnackbarColor"]),
        ...mapGetters(["getLoadingStatus"]),
  },
  mounted() {
    document.title = "Login";
  },
};
</script>
