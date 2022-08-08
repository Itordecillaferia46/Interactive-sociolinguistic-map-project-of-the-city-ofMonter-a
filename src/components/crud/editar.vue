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

            <v-checkbox v-for="comuna in listaComunas " :key="comuna" :label="`${comuna}`" :value="comuna" v-model="nuevoTermino.comunas">
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
                comunas: [],
            },
            listaComunas: [
                "comuna 1",
                "comuna 2", 
                "comuna 3", 
                "comuna 4", 
                "comuna 5", 
                "comuna 6", 
                "comuna 7", 
                "comuna 8", 
                "comuna 9", 
                "comuna 10"
            ]
        }
    },
    methods: {

        limpiar(){
          this.nuevoTermino.termino = "",
          this.nuevoTermino.comunas =[]  
        },

        guardar(){
        axios
        .post("http://localhost:4000/new", this.nuevoTermino)
        .then((response) => {
          console.log(response);
        });
        }

            // axios.post(this.ruta, this.nuevoTermino).then(response=>{console.log(response)})
        
    },
}
</script>
