
<template>
  <v-row class="backgroundTransparent" justify="center">
    <v-dialog class="backgroundTransparent" v-model="dialog" persistent max-width="600px">
      <template class="backgroundTransparent" v-slot:activator="{ on, attrs }">
        <v-btn class="backgroundTransparent" v-bind="attrs" v-on="on">
          <v-icon color="white">mdi-eye</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Change Visibility</span>
        </v-card-title>
        <v-card-text>
          <v-form class="form rounded" ref="form">
            <v-container class="mt-0 px-0" fluid>
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="(n, index) in radioData"
                  :key="n"
                  :label="n"
                  :value="index+1"
                  v-on:click="changeVisibility(index)"
                ></v-radio>
              </v-radio-group>
            </v-container>
            <v-text-field
              v-model="userData.email"
              placeholder="Enter your friends email"
              append-icon="mdi-email"
              :rules="emailRule"
              :hint="emailHint"
              ref="email"
              :disabled="emailStatus"
            ></v-text-field>

            <v-btn
              class="white--text blue darken-4 py-5 px-8"
              elevation="2"
              @click="submit"
              >Change Visibility</v-btn
            >
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>



          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { emailRule } from "../validation/validation.js";
export default {
  name: "Home",

  data() {
    return {
      emailStatus: true,
      radioGroup: 1,
      dialog: false,
      radioData: ["Hidden", "Public", "Private"],
      userData: {
        email: "",
        Status: "hidden",
      },

      emailRule: emailRule,
      emailHint: null,
      usernameHint: null,
      show1: false,
    };
  },
  methods: {
    changeVisibility(n) {
      if (n === 0) {
        this.emailStatus = true;
        this.userData.Status = "hidden";
      } else if (n === 1) {
        this.emailStatus = true;
        this.userData.Status = "public";
      } else {
        this.userData.Status = "private";
        this.emailStatus = false;
 }
    },

    submit() {
        this.dialog = false
    },
  },

  mounted() {
    // document.title = "";
  },
};
</script>

<style scoped>

.backgroundTransparent{
  background-color: transparent !important;
  border: none;
}
</style>