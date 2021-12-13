<template>
  <v-sheet elevation="20">
    <v-container fluid>
      <div v-if="getDropZoneImages.length != 0">
        <!-- ********************************************************************8 -->
        <v-row>
          <v-col cols="12" class="mt-7 py-2 px-13">
            <h3 class="ms-2 mb-5 px-2">Filter Results By:</h3>
            <v-btn-toggle
              v-model="text"
              class="d-flex flex-wrap align-center"
              tile
              color="blue darken-2"
              group
            >
              <v-btn value="1" @click="sort('asc')"> recent Images </v-btn>
              <v-btn value="4" to="/Carousel"> View All Images </v-btn>

              <v-menu offset-y>
                <template value="right" v-slot:activator="{ on, attrs }">
                  <v-btn fdark v-bind="attrs" v-on="on">
                    Image Type
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
              <v-menu offset-y>
                <template value="right" v-slot:activator="{ on, attrs }">
                  <v-btn fdark v-bind="attrs" v-on="on">
                    Visibility
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
              <v-spacer></v-spacer>

              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-on:keyup.enter="show"
                  label="Search"
                  outlined
                ></v-text-field>
              </v-col>
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
              class="hover grey lighten-2"
              v-on:click="showIndex(index)"
            >
              <div
                style="height: 100%"
                class="ImageChild d-flex flex-column justify-space-between"
              >
                <v-row justify="start" class="t1 pa-4 d-inline">
                  <v-btn-toggle
                    class="backgroundTransparent"
                    v-model="toggle_none"
                  >
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
                          Confirm Deletion:
                        </v-card-title>
                        <v-card-text
                          >Do you really want to remove this content? This can't
                          be undone.</v-card-text
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            Confirm
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-btn style="background-color: transparent; border: none">
                      <Visibility />
                    </v-btn>
                  </v-btn-toggle>
                </v-row>
                <div class="child1 ma-3 text-subtitle-1 white--text px-4">
                  image title
                </div>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </div>

      <v-row v-else>
        <v-col cols="12">
          <v-sheet class="text-center">
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              close
            </v-btn>
            <v-btn class="mt-6" text color="error" @click="removeFiles">
              Reset
            </v-btn>
            <v-btn class="mt-6" text color="error" @click="uploadImages">
              Upload
            </v-btn>

            <div>
              <vue-dropzone
                style="height: 60vh"
                ref="myVueDropzone"
                id="dropzone"
                :options="dropzoneOptions"
                @vdropzone-success="success"
              ></vue-dropzone>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import Visibility from "../components/Visibility.vue";
import vue2Dropzone from "vue2-dropzone";
import skeletonLoader from "./SkeletonLoader.vue";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "Gallery",
  components: {
    Visibility,
    vueDropzone: vue2Dropzone,
    skeletonLoader,
  },
  data: () => ({
    imagesData: {
      visibility: "Hidden",
      share_with: [],
      attachments: [],
    },
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
      let obj = {
        image_name: "",
        base64_image: "",
      };

      obj.image_name = file.name;
      obj.base64_image = response.files.file;
      this.imagesData.attachments.push(obj);

      this.$store.dispatch("dropZoneImages", response.files.file);
    },
    uploadImages() {
      // this.$store.dispatch("postImagesData", this.imagesData);
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
  background-color: rgba(255, 255, 255, 0.137) !important;
  border: 1px solid white;
  border-radius: 5px;
}
.hover .ImageChild {
  visibility: hidden;
}
.hover:hover .ImageChild {
  visibility: visible;
}
.child1 {
  visibility: visible !important;
  text-shadow: 0px 0px 12px #000000;
}
</style>
