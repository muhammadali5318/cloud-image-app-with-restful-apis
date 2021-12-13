<template>
  <div>
    <v-carousel height="100vh">
      <v-carousel-item
        style="max-width: 100%; height: 100%"
        v-for="(item, i) in getDropZoneImages"
        :key="i"
        :src="item"
      >
        <v-btn
          to="/Home"
          fab
          large
          light
          bottom
          left
          class="ma-5 v-btn--example"
        >
          <v-icon size="40">mdi-arrow-u-left-top-bold</v-icon>
        </v-btn>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Carousel",
  data() {
    return {};
  },
  methods: {
    route() {
      console.log(this.getDropZoneImages);
    },
  },
  computed: {
    ...mapGetters(["getDropZoneImages"]),
  },
};
</script>
