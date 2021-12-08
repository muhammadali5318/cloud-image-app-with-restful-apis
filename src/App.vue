<template>
<v-app>

  <router-view />
</v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>

.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>
