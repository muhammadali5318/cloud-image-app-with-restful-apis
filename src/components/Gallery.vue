<template>
  <v-sheet>
    <v-container fluid>
       <v-tabs
       class="mb-10"
    fixed-tabs
    background-color="indigo"
    dark
  >
    <v-tab>
      Option
    </v-tab>
    <v-tab>
      Another Selection
    </v-tab>
    <v-tab>
      Items
    </v-tab>
    <v-tab>
      Another Screen
    </v-tab>
  </v-tabs>
      <v-row>
        <v-col
          v-for="(n, index) in getDropZoneImages"
          :key="index"
          class="d-flex child-flex"
          cols="12"
          xl="2"
          lg="2"
          md="4"
          sm="6"
          xs="12"
        >
          <v-img
            :src="n"
            aspect-ratio="1"
            class="grey lighten-2"
            v-on:click="showIndex(index)"
          >
            <div
              style="height: 100%"
              class="d-flex flex-column justify-space-between"
            >
              <!-- <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template> -->
              <v-row justify="start" class="t1 pa-4 d-inline">
                <v-btn-toggle v-model="toggle_none">
                  <v-btn>
                    <v-icon v-on:click.stop="show">mdi-pencil</v-icon>
                  </v-btn>
                  <!-- ********************************************************** -->

                    <v-dialog v-model="dialog" persistent max-width="290">
                      <template v-slot:activator="{ on, attrs }">
                        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn> -->

                        <v-btn v-bind="attrs" v-on="on">
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5">
                          Delete Image.
                        </v-card-title>
                        <v-card-text
                          >Are you sure you want to delete this image?.</v-card-text
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            Disagree
                          </v-btn>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            Agree
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  

                  <!-- ********************************************************** -->
                  <v-btn>
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                  <v-btn>
                    <v-icon>mdi-format-align-justify</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-row>
              <v-spacer></v-spacer>
              <div>
                <v-icon
                  size="40"
                  class="pa-5"
                  color="red"
                  v-on:click="wish()"
                  style="cursor: pointer"
                  >{{ favourite }}</v-icon
                >
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Gallery",

  data: () => ({
  dialog: false,
    drawer: null,
    favourite: "mdi-heart-outline",
    path: [],
    sheet: false,
    toggle_none: null,
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      acceptedFiles: "image/*",
      thumbnailWidth: 150,
      maxFilesize: 4,
      headers: { "My-Awesome-Header": "header value" },
      addRemoveLinks: true,
      dictDefaultMessage:
        "<i  class=' fa fa-cloud-upload fa-5x'></i> </br>  <h3>Drag and drop or paste images here to upload</h3> </br> <p>You can also browse from your computer </p> ",
    },
    // ***********************************
  }),
  methods: {
    show() {
      alert("called");
    },
    showIndex(index) {
      this.$store.dispatch("fetchImageIndex", index);
      this.$router.push({ name: "SingleImage" });
    },
    success(file, response) {
      console.log(response.files);
      this.path.push(response.files.file);
      console.log(file);
      // console.log(this.path);
    },
    wish() {
      this.favourite = "mdi-heart";
    },
    removeFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
  },
  computed: {
    ...mapGetters(["getDropZoneImages"]),
  },
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
