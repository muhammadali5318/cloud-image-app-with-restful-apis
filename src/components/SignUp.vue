
    <!-- 
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file signUp.vue is responsible to handle all user data filled in Sign up form.
 -->
<template>
  <v-form class="form pa-5 rounded" ref="form">
    <h2>Sign Up to pCloud</h2>
    <v-btn v-on:click="showsnack">Show snackbar</v-btn>
              
    <v-spacer></v-spacer>
    <p class="grey--text text--darken-2 font-weight-light">
      One of the best Cloud Image plateform made for you
    </p>
    <v-text-field
      append-icon="mdi-pencil-outline"
      v-model="userData.name"
      hint="minimum 3 characters"
      :rules="nameRules"
      placeholder="Full Name"
    ></v-text-field>

    <!-- <v-text-field
      v-model="userData.name.lastname"
      append-icon="mdi-pencil-outline"
      hint="minimum 3 characters"
      :rules="nameRules"
      placeholder="Last Name"
    ></v-text-field> -->

    <!-- <v-text-field
      v-model="userData.username"
      append-icon="mdi-account"
      placeholder="User Name"
      :rules="usernameRule"
      :hint="usernameHint"
      ref="username"
    ></v-text-field> -->

    <v-text-field
      v-model="userData.email"
      placeholder="Email"
      append-icon="mdi-email"
      :rules="emailRule"
      :hint="emailHint"
      ref="email"
    ></v-text-field>

    <!-- <v-text-field
      v-model="userData.phone"
      placeholder="Phone No"
      append-icon="mdi-phone-plus-outline"
      :rules="phoneNoRule"
      ref="phoneNo"
    ></v-text-field> -->

    <v-text-field
      v-model="userData.password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      placeholder="Password"
      counter="8"
      :rules="passwordRules"
      @click:append="show1 = !show1"
      hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
    ></v-text-field>

    <v-text-field
      v-model="userData.password_confirmation"
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show2 ? 'text' : 'password'"
      placeholder="Password"
      counter="8"
      :rules="passwordRules"
      @click:append="show2 = !show2"
      hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
    ></v-text-field>

    <!-- ************************ Need to ask ******************************** -->
    <v-file-input
      accept="image/*"
      label="Upload Profile Picture"
      v-on:change="storeImg"
      required
      prepend-icon=""
      append-icon="mdi-paperclip"
    ></v-file-input>

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
      >Create P-cloud Id</v-btn
    >

    <p class="mt-5 font-weight-light">
      Already have a pCloud id?
      <router-link to="/SignIn"> Login </router-link>
    </p>

    <!-- *****************snack for password and confirm password bar********************** -->
    <v-snackbar top centered color="red" v-model="snackbar" timeout="2000">
      <span class="group">
        {{ text }}

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>
    <!-- *****************snack for Successfull Sign Up snack bar********************** -->
    <v-snackbar top centered color="red" :value="getSnackbarStatus" timeout="10000">
      <span class="group">
        {{ getSnackbarErrorMsg }}

        <v-icon dark right>mdi-alert-decagram </v-icon>
      </span>
    </v-snackbar>
  </v-form>
</template>

<script>
import {mapGetters} from "vuex"
import {
  emailRule,
  nameRules,
  passwordRules,
} from "../validation/validation.js";
// import { mapState } from "vuex";

export default {
  name: "SignUp",

  data() {
    return {
      snackbar: false,
      snackbar1: this.getSignUpSnackbarStatus,
      text: "Password Does not match",
      text1: "Successfully Registered. Please Check your email for Verification.",
      slider: "",
      userData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        profile_image: "",
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
      console.log(event);
      console.log(event.type);
      console.log(event.name);
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.userData.profile_image = reader.result;
          console.log(reader.result);
        },
        false
      );
      reader.readAsDataURL(event);
    },
    submit() {
      // let validate = true;
      if (this.$refs.form.validate()) {
        if (this.userData.password !== this.userData.password_confirmation) {
          this.snackbar = true;
        } else {
        this.$store.dispatch("updateSnackBarStatus", false);
        this.$store.dispatch("postSignUpData", this.userData);
        
        }
      }
    },
    showsnack(){
      alert(this.getSignUpSnackbarStatus)
    }
  },
  computed: {
    // this.$router.push({ name: "Home" });
    ...mapGetters(["getSnackbarStatus"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
    ...mapGetters(["getLoadingStatus"]),
  },
  mounted() {
    document.title = "Sign Up";
            this.$store.dispatch("updateSnackBarStatus", false);
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
  background-color: rgba(0, 0, 0, 0.993) !important;
}
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>
