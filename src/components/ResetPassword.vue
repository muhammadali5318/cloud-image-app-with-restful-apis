
    <!-- 
System: Image Cloud App
Developer: Muhammad Ali
Date: Dec 13, 2021
Organization: Programmer Force
Purpose: This file ResetPassword.vue is responsible to reset the the new password.
 -->

 
<template>
  <v-form class="form pa-5 rounded" ref="form">
    <v-text-field
      v-model="userData.old_password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      placeholder="Old Password"
      counter="8"
      :rules="passwordRules"
      @click:append="show1 = !show1"
      hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
      class="mb-8"
    ></v-text-field>

    <v-divider></v-divider>

    <v-text-field
      v-model="userData.password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      placeholder="New Password"
      counter="8"
      :rules="passwordRules"
      @click:append="show1 = !show1"
      hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
      class="mt-5"
    ></v-text-field>

    <v-text-field
      v-model="userData.password_confirmation"
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show2 ? 'text' : 'password'"
      placeholder="Confirm New Password"
      counter="8"
      :rules="passwordRules"
      @click:append="show2 = !show2"
      hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
    ></v-text-field>

    <v-btn
      class="white--text blue darken-4 pa-5 px-12"
      elevation="2"
      @click="submit"
      :loading="getLoadingStatus"
      >Reset Password</v-btn
    >

    <!-- *****************snack bar********************** -->
     <v-snackbar top centered :color="getSnackbarColor" :value="getSnackbarStatus" timeout="2000">
      <span class="group">
        {{ getSnackbarErrorMsg }} 

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>
     <v-snackbar top centered color="red" v-model="snackbar" timeout="1000">
      <span class="group">
        {{ text }} 

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>

  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import {
  passwordRules,
} from "../validation/validation.js";


export default {
  name: "ProfileSettings",

  data() {
    return {
      iconStatus: true,
      snackbar: false,
      text: "Password Does not match",
      slider: "",
      userData: {
        old_password: "",
        password: "",
        password_confirmation: "",
      },
      passwordRules: passwordRules,
      emailHint: null,
      show1: false,
      show2: false,
    };
  },
  methods: {
    
    submit() {
      if (this.$refs.form.validate()) {
        if (this.userData.password !== this.userData.password_confirmation) {
          this.snackbar = true;
        } else {
          this.$store.dispatch("postResetPasswordData", this.userData);
        }
      }
    },
  },
   computed: {

        ...mapGetters(["getSnackbarStatus"]),
        ...mapGetters(["getSnackbarErrorMsg"]),
        ...mapGetters(["getSnackbarColor"]),
        ...mapGetters(["getLoadingStatus"]),
  },
  mounted() {},
};
</script>
