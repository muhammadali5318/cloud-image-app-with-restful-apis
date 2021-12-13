
    <!-- 
System: Image Cloud App
Developer: Muhammad Ali
Date: Dec 13, 2021
Organization: Programmer Force
Purpose: This file ProfileSettings.vue is responsible update the user profile data.
 -->

<template>
  <v-form class="form pa-5 rounded" ref="form">
    <v-tabs class="mb-8">
      <v-tab>Profile Settings</v-tab>
      <v-tab>Password </v-tab>
    </v-tabs>

    <div class="d-flex justify-center">
      <v-avatar class="ma-auto" size="140" color="indigo">
        <!-- <v-icon v-if="iconStatus" dark size="100"> mdi-account-circle </v-icon> -->
        <img
          :src="currentUser.user_profile_image_path + '/' + currentUser.profile_image"
          alt=""
        />
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
      v-model="currentUser.name"
      hint="minimum 3 characters"
      :rules="nameRules"
      placeholder="Full Name"
    ></v-text-field>

    <v-text-field
      v-model="currentUser.email"
      placeholder="Email"
      append-icon="mdi-email"
      :rules="emailRule"
      :hint="emailHint"
      ref="email"
      disabled
    ></v-text-field>

    <v-subheader>Select Age in Years:</v-subheader>
    <v-slider
      v-model="currentUser.age"
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
      :loading="getLoadingStatus"
      >Save Changes</v-btn
    >

    <!-- *****************snack bar********************** -->
    <v-snackbar
      top
      centered
      :color="getSnackbarColor"
      :value="getSnackbarStatus"
      timeout="2000"
    >
      <span class="group">
        {{ getSnackbarErrorMsg }}
        <v-icon dark>mdi-check-decagram-outline </v-icon>
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
import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
  name: "ProfileSettings",

  data() {
    return {
      path: "",

      currentUser: "",
      iconStatus: true,
      snackbar: false,
      base64Img: "",
      test: 52,
      text: "Password Does not match",
      slider: "",
      userData: {
        name: "",
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
      this.iconStatus = false;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          // console.log(reader.result);
          // vm.userData.profile_image = reader.result;
          vm.base64Img = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    testing() {
      alert("tested");
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.userData.name = this.currentUser.name;
        // this.userData.id = this.currentUser.User_data.id;
        this.userData.age = this.currentUser.age;
        this.userData.profile_image = this.base64Img;
        // console.log(this.currentUser);
        // console.log("***********************");
        // console.log(this.userData);

        //  This dispatch method will update the user profile in backend database

        this.$store.dispatch("updateSnackBarStatus", false);
        this.$store.dispatch("postUpdateProfileData", this.userData);
       setTimeout(() => {
         if (this.getSnackbarErrorMsg == "Session Expire, Please Login Again") {
           this.$store.dispatch("updateSnackBarStatus", false);
            this.$router.push({name: "SignUpLogin"})
          }
       }, 3000);

      }
    },
  },
  computed: {
    // this.$router.push({ name: "Home" });
    ...mapGetters(["getSnackbarStatus"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
    ...mapGetters(["getSnackbarColor"]),
    ...mapGetters(["getLoadingStatus"]),
    // ...mapGetters(["getTesting"]),
  },
  mounted() {
    let user = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(user);
    console.log(this.currentUser);
    console.log(this.currentUser.profile_image);
    console.log(this.currentUser.user_profile_image_path);

    // this.path =this.currentUser.user_profile_image_path +
    //   "/" +
    //   this.currentUser.profile_image;
    // console.log(this.path);
  },
};
</script>

<!--
<style scoped>
.wrapper {
  background: url("../assets/back.jpg");
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
-->