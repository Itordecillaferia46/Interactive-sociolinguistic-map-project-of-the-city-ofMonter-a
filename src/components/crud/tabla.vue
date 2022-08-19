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
                    <td> <v-btn color="blue" v-on:click="editar(palabra._id)"> <v-icon  color="white">mdi-pencil </v-icon> </v-btn></td>
                    <!-- <td><v-btn color="red" v-bind="attrs" v-on="on"> <v-icon  color="white">mdi-delete </v-icon> </v-btn> </td> -->
                    <td>
                        <v-row justify="center">
                            <v-dialog
                            v-model="dialog"
                            persistent
                            max-width="290"
                            >
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn color="red" v-bind="attrs" v-on="on"> <v-icon  color="white">mdi-delete </v-icon> </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="text-h5">
                                Borrar entrada
                                </v-card-title>
                                <v-card-text>Estás seguro que quieres <b>borrar</b> esta entrada? Esta acción no se puede deshacer.</v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    color="red"
                                    text
                                    @click="eliminar(palabra._id), dialog=false"
                                >
                                    Borrar
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-row>
                    </td>
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
            dialog: false,
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
        
        let response = await axios.delete("http://localhost:4000/" + id)
        this.palabras = this.palabras.filter((el)=>el._id !== id)
        console.log(response)
    },
    editar(id){
        this.$router.push('/editar/' + id)
    },
    },
}
</script>