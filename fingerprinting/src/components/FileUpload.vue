<template>
  <div>
    <div class="md-layout">
      <md-field class="md-layout-item md-size-70">
        <label>Choose audio file</label>
        <md-file name="song" id="song-input" v-on:change="getFileBytesArray" />
      </md-field>
      <md-button
        class="md-raised md-primary md-layout-item md-size-10"
        v-on:click="calculateFingerprint"
      >Upload</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data: function() {
    return {
      file: null
    };
  },
  methods: {
    calculateFingerprint: function() {
      const baseURI = "http://localhost:3000/";
      var formData = new FormData();
      formData.append("song", this.file);
      this.$http.post(baseURI, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    },
    getFileBytesArray: function(event) {
      this.file = event.target.files[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
