<template>
    <v-container>
        <v-row>
        <v-col
        cols="12">
        <v-form>
            <v-text-field
                label="Termino"
                required
                v-model="nuevoTermino.termino">
            </v-text-field>

            <v-checkbox v-for="comuna in listaComunas " :key="comuna" :label=" 'comuna ' + `${comuna}`" :value="comuna" v-model="nuevoTermino.comuna">
            </v-checkbox>

        </v-form>
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn
                depressed
                color="primary"
                v-on:click=" guardar(), limpiar()"
                >
                Guardar
                </v-btn>
            </v-col>
        </v-row>
        {{$data}}
    </v-container>
</template>

<script>
const axios = require("axios");
export default{
    data(){
        return{
            ruta: "http://localhost:4000/",
            nuevoTermino: {
                termino: "",
                comuna: [],
            },

            listaComunas: [1,2,3,4,5,6,7,8,9]

        }
    },
    methods: {

        limpiar(){
          this.nuevoTermino.termino = "",
          this.nuevoTermino.comuna =[]  
        },

        guardar(){
        axios
        .post("http://localhost:4000/new", this.nuevoTermino)
        .then((response) => {
          console.log(response);
        });
        },

            // axios.post(this.ruta, this.nuevoTermino).then(response=>{console.log(response)})
        
    },
}
</script>
