<template>
  <div>

    <v-carousel height="100vh">
      <v-carousel-item
        v-for="(item, i) in getDropZoneImages"
        :key="i"
        :src="item"

      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  methods:{
      Show(){
          console.log(this.getDropZoneImages);
      }
  },
  computed: {
    ...mapGetters(["getDropZoneImages"]),
  },
};
</script>
