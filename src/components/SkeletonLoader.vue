<!--
This is the loading skeleton. it is used when data is fetched from api
-->

<template>
  <div>
    <v-container fluid >
      <v-sheet
        :color="`grey ${theme.isDark ? 'lighten-5' : 'lighten-5'}`"
        class="pa-3"
      >
        <v-row>
          <v-col
            v-for="data in 6"
            :key="data"
           cols="12"
            xl="2"
            lg="2"
            md="4"
            sm="6"
            xs="12"
          >
            <div>
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="image"
              ></v-skeleton-loader>
             
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "skeletonLoader",
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>