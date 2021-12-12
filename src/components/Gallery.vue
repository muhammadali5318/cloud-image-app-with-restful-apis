<template>
  <v-sheet elevation="20">
    <v-container fluid>
<!-- ********************************************************************8 -->
    <v-row>
      <v-col cols="12"   class="mt-7 py-2 px-13">
        <h3 class="ms-2 mb-5">Filter Results:</h3>
        <v-btn-toggle v-model="text" class="d-flex flex-wrap" tile color="blue darken-2" group>
          <v-btn value="1" @click="sort('asc')"> Ascending Sort </v-btn>
          <v-btn value="2" @click="sort('desc')"> Decending Sort </v-btn>
          <v-btn value="3" @click="sort('desc')"> Decending Sort </v-btn>
          <v-btn value="4" to="/Carousel"> View All Images </v-btn>

          <v-menu offset-y>
            <template value="right" v-slot:activator="{ on, attrs }">
              <v-btn fdark v-bind="attrs" v-on="on">
                Dropdown
                <v-icon right>mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title
                  @click="show(item.id)"
                  style="cursor: pointer"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn-toggle>
      </v-col>
    </v-row>
<!-- ********************************************************************8 -->





      <v-divider class="mt-5 my-5"></v-divider>
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
                <v-btn-toggle
                  class="backgroundTransparent"
                  v-model="toggle_none"
                >
                  <!-- <v-btn>
                    <v-icon v-on:click.stop="show">mdi-pencil</v-icon>
                  </v-btn> -->
                  <!-- ********************************************************** -->

                  <v-dialog
                    class="backgroundTransparent"
                    v-model="dialog"
                    persistent
                    max-width="290"
                  >
                    <template
                      class="backgroundTransparent"
                      v-slot:activator="{ on, attrs }"
                    >
                      <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn> -->

                      <v-btn
                        class="backgroundTransparent"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon color="white">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5">
                        Delete Image.
                      </v-card-title>
                      <v-card-text
                        >Are you sure you want to delete this
                        image?.</v-card-text
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
                  <v-btn style="background-color: transparent; border: none">
                    <Visibility />
                  </v-btn>
                  <!-- <v-btn v-on:click.stop="route" >
                     
                  </v-btn> -->

                  <!-- ************************************************************* -->

                  <!-- ************************************************************* -->
                </v-btn-toggle>
                <!-- <v-icon>mdi-folder </v-icon> -->
              </v-row>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import Visibility from "../components/Visibility.vue";
export default {
  name: "Gallery",
  components: {
    Visibility,
  },
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
     items: [
        { title: "fetch 5", id: 5 },
        { title: "fetch 10", id: 10 },
        { title: "fetch 15", id: 15 },
        { title: "fetch 20", id: 20 },
      ],
      text: "left",
      icon: "justify",
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
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
    route() {
      this.$router.push({ name: "Visibility" });
    },
  },
  computed: {
    ...mapGetters(["getDropZoneImages"]),
  },
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
.backgroundTransparent {
  /* background-color: transparent !important; */
  background-color: rgba(255, 255, 255, 0.137) !important;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
