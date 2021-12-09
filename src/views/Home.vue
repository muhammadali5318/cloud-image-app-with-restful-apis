<template>
  <div>
    <!-- <SignUpLogin /> -->
    <AppBar />

    <v-card class="pa-10">
      <v-row class="mt-16">
        <v-col class="d-flex" cols="12">
          <v-row>
            <v-col
              class="text-center text-sm-center text-md-right pa-0"
              cols="12"
              xs="12"
              sm="12"
              md="2"
              xl="2"
              lg="2"
            >
              <v-avatar class="pa-0 mx-10" size="150">
                <img  src="../assets/back.jpg" alt="" />
              </v-avatar>
            </v-col>
            <v-col
            align-self="center"
              class="pa-0  text-sm-center  text-center text-md-left"
              cols="12"
              xs="12"
              sm="12"
              md="8"
              xl="8"
              lg="8"
            >
              <div >
                <div
                  class="text-h5 text-sm-h5 text-md-h4 text-xl-h4 text-lg-h4"
                >
                  Muhammad Ali
                </div>
                <div
                  class="
                    text-subtitle1
                    text-sm-subtitle1
                    text-md-subtitle1
                    text-xl-subtitle1
                    text-lg-subtitle1
                  "
                >
                  Muhammadalik619@gmail.com
                </div>
                <div>
                  <v-btn v-on:click="route" class="d-inline px-0" text>
                    <v-icon left>mdi-pencil</v-icon>
                    Edit
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- <v-spacer></v-spacer> -->
        </v-col>
        <!-- <v-spacer></v-spacer> -->
      </v-row>
    </v-card>

    <Gallery />
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import Gallery from "../components/Gallery.vue";

export default {
  name: "Home",

  components: {
    Gallery,
    // SignUpLogin,
    AppBar,
  },
  methods: {
route(){
    this.$router.push({ name: "UpdateProfile" });
}
  }
};
</script>
