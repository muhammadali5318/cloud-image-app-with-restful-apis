<template>
  <div class="black" >
    <v-responsive height="100vh">
      <v-img  style="max-width: 100%; height: 100%"  :src="getDropZoneImages[getImageIndex]" contain   >
      <a class="text-decoration-none " :href="getDropZoneImages[getImageIndex]" download>

        <v-btn fab large light bottom left class="ma-5 v-btn--example">
          <v-icon size="40">mdi-download-circle</v-icon>
        </v-btn>
      </a>
      
      
      </v-img>
    </v-responsive>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleImage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getDropZoneImages"]),
    ...mapGetters(["getImageIndex"]),
  },
};
</script>