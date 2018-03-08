
<template>
    <v-app>
    <div class="home">
    <navbar></navbar>
    <v-jumbotron class="mt-1">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">BEGIN REGISTRATION</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
    <router-link to='/admission'>
        <v-btn class="primary mt-4">
          GO TO REGISTRATION
        </v-btn>
    </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron> 
  </div>
  </v-app>
</template>

<script>
import navbar from "./navbar.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-top: 200px;
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
  text-decoration: none;
}
</style>
