<template>
    <v-form class="borde" v-model="valid" ref="form" lazy-validation>
        <v-text-field label="Nombre del calzado" v-model="name"
        :rules="nameRules" required></v-text-field>
        <v-text-field name="input-7-1" label="Descripcion del calzado"
        v-model="description" multi-line :rules="desciptionRules" required></v-text-field>
        <v-select label="Tipo de calzado" v-model="topic"
        required
        :rules="tipoRules"
        :items="tipo"></v-select>
        <v-text-field label="Precio" v-model="cost"
        required
        :rules="precioRules"></v-text-field>
        <v-text-field label="Ingresa la URL/Link de la imagen" v-model="image" required :rules="imagenRules"></v-text-field>
        <!--<v-file-input label="Ingresa una imagen" filled prepend-icon="mdi-camera" v-model="image" name='imagen'></v-file-input>-->
        <v-text-field label="Existencia" v-model="existens" required :rules="existenciaRules"></v-text-field>
        <v-btn @click="submit" :disabled="!valid">Enviar</v-btn>
        <b-btn @click="clear">Limpiar</b-btn>
    </v-form>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    name: '',
    description: '',
    cost: '',
    topic: '',
    image: '',
    existens: '',
    nameRules: [
      v => !!v || 'El nombre del componente es requerido'
    ],
    tipoRules: [
      v => !!v || 'Se requiere el tipo de calzado'

    ],
    precioRules: [
      v => !!v || 'Se requiere el precio del calzado'
    ],
    desciptionRules: [
      v => !!v || 'Se requiere la descipcion del calzado'
    ],
    imagenRules: [
      v => !!v || 'Se require un link para la imagen'
    ],
    existenciaRules: [
      v => !!v || 'Se requiere el numero de existencia'
    ],
    select: null,
    tipo: [
      'Balenciaga',
      'Burberry',
      'Givenchy',
      'Gucci'
    ]
  }),
  methods: {
    // Metodo para enviar lo del formulario
    submit () {
      // Realizar siguiente accion
      return axios({
        method: 'post',
        data: {
          name: this.name,
          description: this.description,
          cost: this.cost,
          image: this.image,
          existens: this.existens,
          topic: this.topic
        },
        url: 'http://localhost:8081/components',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          this.$router.push({ name: 'Home' })
          this.$$refs.form.reset()
        })
        .catch(() => {
        })
      // return true
    },
    // Fin del metodo Submit()
    // -----------------------------------------------------
    // Metodo de limpirar el formulario
    clear () {
      this.$refs.form.reset()
    }
    // Fin del metodo clear()
    // ---------------------------------------------------
  }
}
</script>

<style >
.borde{
 
  position: absolute;
  top:12vh;
  width:92%;
}
</style>
