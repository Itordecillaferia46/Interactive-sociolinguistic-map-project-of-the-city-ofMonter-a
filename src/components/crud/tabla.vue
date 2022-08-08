<template>
<v-container>
    <v-simple-table>
        <template>
            <thead>
                <tr>
                    <th>
                        Palabra
                    </th>
                    <th>
                        Comunas
                    </th>
                    <th>
                        Editar
                    </th>
                    <th>
                        Eliminar
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="palabra in palabras" :key="palabra.palabra">
                    <td>{{palabra.termino}}</td>
                    <td>{{palabra.comuna.join(", ")}}</td>
                    <td><v-icon  color="blue">mdi-pencil v-on:click=""</v-icon></td>
                    <td><v-icon  color="red">mdi-delete </v-icon></td>
                </tr>
            </tbody>
            {{$data}}
        </template>
    </v-simple-table>
</v-container>
</template>
<script>
const axios = require("axios");
export default{
    data(){
        return{
            palabras:[],
        }
    },
  async mounted(){
    let response = await axios.get("http://localhost:4000");
    this.palabras = response.data;
    console.log(response.data)
    },

    methods: {
    async eliminar(id){
        
        let response = await axios.delete("https://diccionario-backend.herokuapp.com/palabra/" + id)
        this.palabras = this.palabras.filter((el)=>el._id !== id)
        console.log(response)
    },
        
    },
}
</script>