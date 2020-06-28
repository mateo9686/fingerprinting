<template>
  <div class="hello">
    <input type="file" name="song" id="song-input" v-on:change="getFileBytesArray" />
    <button id="submit-song" v-on:click="calculateFingerprint">Submit</button>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data: function () {
    return {
      file: null
    }
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
