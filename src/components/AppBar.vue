<!-- 
this file components/AppBar.vue is the main header main Navbar used in all the components 
-->

<template>
  <div>
    <v-app-bar class="text-white mb-16" app>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="cursor: pointer">
        <v-img src="../assets/logo.png" v-on:click="route('Home')"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- ********************* drop zone******************** -->
      <v-bottom-sheet :scrollable="true" v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="text-sm-body1" light text v-bind="attrs" v-on="on">
            Upload Image
            <v-icon right size="28"> mdi-cloud-upload-outline </v-icon>
          </v-btn>
        </template>
        <v-sheet class="text-center" height="auto">
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
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              @vdropzone-success="success"
            ></vue-dropzone>
          </div>
        </v-sheet>
      </v-bottom-sheet>

      <div class="hidden-md-and-down text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" dark v-bind="attrs" v-on="on" text>
              Muhammad Ali
              <v-icon> mdi-chevron-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              style="cursor: pointer"
              v-for="(item, index) in items"
              :key="index"
              v-on:click="route(item.routeName)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- ***************************************** -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list flat>
        <v-toolbar-title class="px-5 font-weight-medium"
          >Muhammad Ali</v-toolbar-title
        >
        <div class="px-5 text-caption">Logged In</div>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="route(item.routeName)"
            style="cursor: pointer"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "appbar",
  props: ["appbarId"],
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      // *************************** Image Data to send in API *******************************
      imagesData: {
        visibility: "Public",
        share_with: [],
        attachments: [],
      },

      // ***********************************************
      path: [],
      sheet: false,
      toggle_none: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        acceptedFiles: "image/*",
        thumbnailWidth: 150,
        maxFilesize: 6,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
        dictDefaultMessage:
          "<i  class=' fa fa-cloud-upload fa-5x'></i> </br>  <h3>Drag and drop or paste images here to upload</h3> </br> <p>You can also browse from your computer </p> ",
      },
      // ***********************************************
      drawer: null,
      selectedItem: Number(this.appbarId),
      appBarStatus: true,

      items: [
        { text: "Home", icon: "mdi-home", routeName: "Home" },
        {
          text: "Profile",
          icon: "mdi-account-box",
          routeName: "UpdateProfile",
        },

        {
          text: "Logout",
          icon: "mdi-bag-checked",
          routeName: "SignUpLogin",
        },
      ],
    };
  },
  methods: {
    route(routeName) {
      this.$router.push({ name: routeName });
    },
    logout() {
      this.$router.push({ name: "SignIn" });
      localStorage.setItem("currentUser", "");
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

    removeFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
    uploadImages() {
      alert("images Uploaded");
      this.$store.dispatch("postImagesData", this.imagesData);
    },
  },
};
</script>
