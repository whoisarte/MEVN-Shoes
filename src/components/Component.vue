<template>
    <v-container fluid>
        <v-card class="mx-auto" width="80%">
          <v-img
            class="white--text align-end"
            height="500px"
            :src=components.image
            contain
            >
           </v-img>
           <v-card-title color="black" >{{ components.name }}</v-card-title>
          <v-card-subtitle class="pb-0">{{ components.description }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Precio ${{ components.cost }}</div>
            <div>Existencia {{ components.existens }}</div>
          </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Component',
  data () {
    return {
      components: [],
     
    }
  },
  mounted () {
    this.fetchComponent()
  },
  methods: {
    fetchComponent () {
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/components/${(this.$route.params.id)}`
      })
        .then((response) => {
          this.components = response.data
        })
        .catch(() => {
        })
    },
    submit (idx, namex, costx, imagex, existensx, topicx) {
      var newItem = {id: idx, name: namex, cost: costx, image: imagex, quantity: 1, topic: topicx}
      this.carrito.push(newItem)
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
    }
  }
}
</script>


