<template>
  <v-layout wrap>
    <!---------------------------------------------------------------------------------------->
    <v-layout wrap row>
      <v-flex xs4 id="card" v-for="component in components" :key="component._id">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="500px"
            :src=component.image>
            </v-img>
          <v-card-title color="black" >{{ component.name }}</v-card-title>
          <v-card-subtitle class="pb-0">{{ component.description }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Precio ${{ component.cost }}</div>
            <div>Existencia {{ component.existens }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="rgb(255,0,0)" v-bind:to="`/components/${component._id}`">Ver Articulo</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
  
</template>
<script>
import axios from 'axios'

export default {
  name: 'Components',
  data () {
    return {
      components: [],
    }
  },
  created () {
    this.fetchComponent()
  },
  methods: {
    fetchComponent () {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/components',
        headers: {
          'Content-Type': 'application/json;'
        }
      })
        .then((response) => {
          this.components = response.data
        })
        .catch(() => {
        })
    },
    
  }
}

</script>

<style scoped>
#carru {
  margin-bottom: 15px;
}
#card {
  margin-bottom: 5px;
}
</style>
