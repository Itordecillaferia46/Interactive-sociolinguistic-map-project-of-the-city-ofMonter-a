<template>
    <div>
        <v-bottom-navigation color="primary" horizontal>
            <v-btn to="/formulario">
                <span>Agregar</span>

                <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn to="/tabla">
                <span>Administrar</span>

                <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>

        </v-bottom-navigation>
        <v-container class="spacing-playground pa-8 d-flex justify-center">
            <v-card width="600" class="spacing-playground pa-8">
                <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-form >
                                <v-text-field label="Termino" required v-model="palabra.termino">
                                </v-text-field>
                            <v-checkbox v-for="comuna in listaComunas " :key="comuna" :label="'comuna ' + `${comuna}`"
                                :value="comuna" v-model="palabra.comuna">
                            </v-checkbox>
                <v-col cols="5">
                    <v-btn depressed color="primary" v-on:click="editar()">
                        Guardar
                    </v-btn>
                </v-col>
                <v-col cols="5">
                    <v-btn depressed color="primary" v-on:click="regresar()">
                        Regresar
                    </v-btn>
                </v-col>
                        </v-form >
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data() {
        return {
            idPalabra: null,
            ruta: "http://localhost:4000/",
            palabra: {
                termino: "",
                comuna: [],
            },

            listaComunas: [1, 2, 3, 4, 5, 6, 7, 8, 9]

        }
    },
    methods: {
        editar() {
            axios
                .patch("http://localhost:4000/" + this.idPalabra, this.palabra)
                .then((data) => {
                    console.log(data);
                });
        },
        regresar() {
            this.$router.push('/tabla')
        }

    },
    mounted() {
        this.idPalabra = this.$route.params.id;
        axios.get("http://localhost:4000/" + this.idPalabra)
            .then((datos) => {
                this.palabra.termino = datos.data.termino;
                this.palabra.comuna = datos.data.comuna;
            });
    },
}
</script>

