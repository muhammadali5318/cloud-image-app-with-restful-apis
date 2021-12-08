


    <!-- 
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file signUp.vue is responsible to handle all user data filled in Sign up form.
 -->

 
<template>
  <v-form class="form pa-5 rounded" ref="form">
   

    <!-- ************************************************** -->

        <v-text-field
      v-model="userData.oldPassword"
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
      v-model="userData.newPassword"
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
      v-model="userData.confirmNewPassword"
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
      >Reset Password</v-btn
    >

    <!-- *****************snack bar********************** -->
    <v-snackbar top centered color="red" v-model="snackbar" timeout="2000">
      <span class="group">
        {{ text }}

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>
  </v-form>
</template>

<script>
import {
  emailRule,
  nameRules,
  passwordRules,
} from "../validation/validation.js";
// import { mapState } from "vuex";

export default {
  name: "ProfileSettings",

  data() {
    return {
      iconStatus: true,
      snackbar: false,
      text: "Password Does not match",
      slider: "",
      userData: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      nameRules: nameRules,
      passwordRules: passwordRules,
      emailRule: emailRule,
      emailHint: null,
      show1: false,
      show2: false,
    };
  },
  methods: {
    storeImg(event) {
      let vm = this;
      this.iconStatus = false;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          console.log(reader.result);
          vm.userData.profilePicture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    submit() {
      // let validate = true;
      if (this.$refs.form.validate()) {
        if (this.userData.password !== this.userData.confirmPassword) {
          this.snackbar = true;
        } else {
          this.$store.dispatch("postSignUpData", this.userData);
        }
      }
    },
  },
  computed: {
    // this.$router.push({ name: "Home" });
    // ...mapState({ msg: (state) => state.SignUp.message }),
  },
  mounted() {

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
/* .form {
  background-color: rgba(0, 0, 0, 0.993) !important;
} */
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>
