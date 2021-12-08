
    <!-- 
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file signUp.vue is responsible to handle all user data filled in Sign up form.
 -->
<template>
  <v-form class="form pa-5 rounded" ref="form">

    <div class="d-flex justify-center">
      <v-avatar class="ma-auto" size="140" color="indigo">
        <v-icon v-if="iconStatus" dark size="100"> mdi-account-circle </v-icon>
        <img v-else :src="userData.profilePicture" alt="" />
      </v-avatar>
    </div>

    <div class="mt-5 d-flex align-center mb-3">
      <v-file-input
        accept="image/*"
        label="Update Profile Picture"
        v-on:change="storeImg"
        prepend-icon=""
        append-icon="mdi-paperclip"
      ></v-file-input>
    </div>

    <!-- ************************************************** -->

    <v-text-field
      append-icon="mdi-pencil-outline"
      v-model="userData.fullName"
      hint="minimum 3 characters"
      :rules="nameRules"
      placeholder="Full Name"
    ></v-text-field>

    <v-text-field
      v-model="userData.email"
      placeholder="Email"
      append-icon="mdi-email"
      :rules="emailRule"
      :hint="emailHint"
      ref="email"
    ></v-text-field>

    <v-subheader>Select Age in Years:</v-subheader>
    <v-slider
      v-model="userData.age"
      :min="12"
      :max="90"
      color="grey darken-3"
      append-icon="mdi-account-question"
      :thumb-size="22"
      thumb-label="always"
    ></v-slider>

    <p class="mt-5 font-weight-light">
      By proceeding, you agree to the
      <a href="#">Terms and conditions</a>
    </p>

    <v-btn
      class="white--text blue darken-4 pa-5 px-12"
      elevation="2"
      @click="submit"
      >Save Changes</v-btn
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
        fullName: "",
        email: "",
        profilePicture: "",
        age: "",
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
