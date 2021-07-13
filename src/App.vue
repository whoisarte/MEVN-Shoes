<template>
  <v-app id="inspire">
    <v-navigation-drawer>
    <v-card-title class="text-red" title="Shoes AAA"></v-card-title> 
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <router-link v-bind:to="{ name: 'Home'}" class="side_bar_link">
        <v-bar-title class="text-red">Shoes AAA</v-bar-title>
      </router-link>

      <v-spacer></v-spacer>
      
   <v-btn v-bind:to="{ name: 'Balenciaga' }">
      <span>Balenciaga</span>
    </v-btn
    >
    <v-btn v-bind:to="{ name: 'Burberry' }">
      <span>Burberry</span>
    </v-btn>

    <v-btn v-bind:to="{ name: 'Givenchy' }">
      <span>Givenchy</span> 
    </v-btn>

    <v-btn v-bind:to="{ name: 'Gucci' }">
      <span>Gucci</span>
    </v-btn>
     
  <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn color="rgb(255,0,0)" v-bind:to="{ name: 'AddComponente' }" width="auto">Agregar Articulo</v-btn>
     </v-toolbar-items>
    </v-app-bar>
  <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    <v-footer
    dark
    padless
  >   
  </v-footer>
  </v-app>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.white = true
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
#navigation {
  width: auto;
}
.text-red{
  color: red !important;
}

</style>
