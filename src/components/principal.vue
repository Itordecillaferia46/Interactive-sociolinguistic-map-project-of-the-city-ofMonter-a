<template>
  <v-app>
    <div class="colorfondo">
      <v-container fluid>
        <v-card class="overflow-hidden">
          <v-app-bar
            absolute
            color="#305DBF"
            dark
            height="100"
            scroll-target="#scrolling-techniques-2"
          >
            <template v-slot:img="{ props }">
              <v-img v-bind="props"></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title
              ><h4>Mapa sociolingüístico interactivo</h4>
              <h4>de la ciudad de Montería</h4></v-app-bar-title
            >

            <v-spacer></v-spacer>

            <router-link :to="{ name: 'creditos' }" class="noneline">
              <!--              //<v-icon>{{ icons.mdiAccount }}</v-icon> -->
              <div class="mx-2"></div>
            </router-link>
          </v-app-bar>
          <v-sheet max-height="760">
            <v-container style="height: 1000px;">
              <br />
              <br />
              <br />
              <br />
              <br />

              <div>
                <v-row>
                  <v-col cols="2">
                    <div>
                      <v-row>
                        <v-col> </v-col>
                        <v-col>
                          <div
                            style="border: 0px solid powderblue"
                            class="div-select"
                          >
                            <v-container fluid>
                              <v-row align="center">
                                <v-col class="d-flex" cols="12" sm="12">
                                  <!--                                         <v-select
                                          :items="items"
                                          label="Selecciona una Comuna"
                                          dense
                                          outlined
                                          
                                        ></v-select> -->
                                  <v-expansion-panels>
                                    <v-expansion-panel>
                                      <v-expansion-panel-header>
                                        <h2>Comuna:</h2>
                                      </v-expansion-panel-header>
                                      <v-expansion-panel-content>
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 2"
                                        >
                                          1
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 3"
                                        >
                                          2
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 4"
                                        >
                                          3
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 5"
                                        >
                                          4
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 6"
                                        >
                                          5
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 7"
                                        >
                                          6
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 8"
                                        >
                                          7
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 9"
                                        >
                                          8
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = 10"
                                        >
                                          9
                                        </v-btn>
                                        <br />
                                        <v-btn
                                          class="ma-2"
                                          outlined
                                          color="primary"
                                          @click="com = 1"
                                        >
                                          inicio
                                        </v-btn>
                                      </v-expansion-panel-content>
                                    </v-expansion-panel>
                                  </v-expansion-panels>
                                </v-col>
                              </v-row>
                            </v-container>
                          </div>
                        </v-col>
                      </v-row>

                      <br />
                      <!--                           <v-card-text class="text--primary" max-width="344">
                            <div
                              class="divbarrios"
                              style="border: 1px solid powderblue "
                            >
                              <p>Barrios</p>
                            </div>
                            <br />
                            <div
                              class="divbarrios"
                              style="border: 1px solid powderblue "
                            >
                              <p>Aqui se muestran los terminos</p>
                            </div>
                          </v-card-text> -->
                      <br />
                      <br />
                      <br />
                    </div>
                  </v-col>

                  <v-col cols="10">
                    <div style="border: 1px solid powderblue">
                      <br />
                      <div v-if="com === 1">
                        <v-row justify="center">
                          <v-col>
                            <div class="" style="border: 0px solid powderblue">
                              <v-row>
                                <v-col>
                                  <v-card
                                    class="mx-auto"
                                    max-width="830"
                                    max-height="700"
                                  >
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1Z3zNCXWCoFiz-3CXLTI--4yoougXbSqd&ehbc=2E312F"
                                      width="830"
                                      height="600"
                                    ></iframe>
                                  </v-card>
                                  <br />
                                </v-col>
                              </v-row>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 2">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1sGtUBNn1t56F-_vN1VeBfTLqD4chOREw&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 3">
                        <v-row justify="center">
                                                    <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1yhzIKq2qRtst39cyyjdRf-3K5RulXZr2&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 4">
                        <v-row justify="center">
                                                    <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1kfVWDlnRBb7tg8CBa12o3KPOPUaKt4sG&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>

                      <div v-if="com === 5">
                        <v-row justify="center">

                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=12-F1xq5M3_vEd1GBFWdiwteEZtiQORlK&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 6">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=13K7BndeZl5plt5Yr_CZ5KZOznVSldQf9&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>

                      <div v-if="com === 7">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1Dfkk95_HPtpsBDOwna606s3clZ_Jnfax&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 8">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1pb6yRMcQ0zbuf_vIqdFejKs4vZ-npMJK&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 9">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1wBKoV-ra23aHoaZ_7u64Md49XNAhcNMg&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                      <div v-if="com === 10">
                        <v-row justify="center">
                          <v-col>
                            <v-container class="grey lighten-5">
                              <v-row no-gutters>
                                <v-col cols="12" sm="6" md="8">
                                  <v-card class="pa-2" outlined tile>
                                    <iframe
                                      src="https://www.google.com/maps/d/u/0/embed?mid=1S9Rvg4EQQ011fMVDf7Pv7B5j3nMkKgPq&ehbc=2E312F"
                                      width="610"
                                      height="500"
                                    ></iframe>
                                  </v-card>
                                </v-col>
                                <v-col cols="6" md="4">
                                  <v-card class="pa-2" outlined tile>
                                    .col-6 .col-md-4
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-container>
                           
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-sheet>
        </v-card>
        <div class="screen">
          <!-- code -->
        </div>
      </v-container>
    </div>
  </v-app>
</template>
<script>
//import { mdiAccount } from "@mdi/js";
export default {
  name: "App",

  /* data: () => ({
    icons: {
      mdiAccount,
    },
    items: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    menu: [{ title: "Acerca de" }, { title: "Diccionario electrónico" }],
  }), */
  data() {
    return {
      dialogol: false,
      dialogo: false,
      dialog: false,
      dialo: false,

      com: 1,
      impro: "yaris",
      enana: [],
    };
  },

  computed: {},

  methods: {},
};
</script>

<style>
.divbarrios {
  border-radius: 1rem;
}
.colorfondo {
  background-color: #d6d6d6;
}
.div-select {
  border-radius: 0.5rem;
}
.screen {
  position: relative;
}
.innerdiv {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
