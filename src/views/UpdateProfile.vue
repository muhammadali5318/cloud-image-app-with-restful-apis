
    <!-- 
System: Image Cloud App
Developer: Muhammad Ali
Date: Dec 13, 2021
Organization: Programmer Force
Purpose: This file UpdateProfile.vue is responsible to combine ProfileSetting.vue and ResetPassword.vue components.
 -->

<template>
  <v-main>
      <AppBar/>
    <v-container>
      <h1 class="mt-8">Profile settings:</h1>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <v-row >
            <v-col  cols="2">
              <v-list class="hidden-xs-only" flat>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i"
                   @click="replaceComponent(item.componentName)" >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.title }}
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-icon right> {{ item.icon }} </v-icon>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-divider class="mt-10"  vertical></v-divider>
            <v-col cols="12" xs="12" sm="8" md="5" class="ma-auto" >
              <keep-alive>
                <component v-bind:is="componentName"></component>
              </keep-alive>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import ProfileSettings from "../components/ProfileSettings.vue";
import ResetPassword from "../components/ResetPassword.vue";

export default {
  name: "UpdateProfile",
  components: {
    ProfileSettings,
    ResetPassword, 
    AppBar
  },
  data() {
    return {
      componentName: "ProfileSettings",
      selectedItem: Number(this.appbarId),
      items: [
        { title: "Profile", icon: "mdi-chevron-right" , componentName: "ProfileSettings" },
        { title: "Password", icon: "mdi-chevron-right", componentName: "ResetPassword" },
      ],
     
    };
  },

  methods: {
    Show(event) {
      console.log(event);
    },
    replaceComponent(n){
        alert(n)
        this.componentName = n;
    }
  },
  mounted(){
          document.title = "Update Profile";
  }
};
</script>
