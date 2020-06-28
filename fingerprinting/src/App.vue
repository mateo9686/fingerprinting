<template>
  <div id="app">
    <file-upload />
  </div>
</template>

<script>
import FileUpload from "./components/FileUpload.vue";

export default {
  name: "App",
  components: {
    FileUpload
  }
};
</script>

<style>
#app {
  margin-top: 60px;
  text-align: center;
}
</style>
