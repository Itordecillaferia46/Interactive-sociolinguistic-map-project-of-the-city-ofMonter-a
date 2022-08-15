<template>
    <div>
        <v-row justify="center">
            <v-col>
                <v-container class="grey lighten-5">
                    <v-row no-gutters>
                        <v-col cols="12" sm="6" md="8">
                            <v-card class="pa-2" outlined tile>
                                <iframe :src="url" :width="width" :height="height"></iframe>
                            </v-card>
                        </v-col>
                        <v-col cols="6" md="4">
                            <v-card v-for="(palabra, index) in palabras" :key="index" class="pa-2" outlined tile>
                                {{palabra.termino}}
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        url: String,
        width: Number,
        height: Number,
        palabras: Array,
    },
}
</script>