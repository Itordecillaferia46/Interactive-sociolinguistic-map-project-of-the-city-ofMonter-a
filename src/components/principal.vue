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
                                  <v-expansion-panels>
                                    <v-expansion-panel>
                                      <v-expansion-panel-header>
                                        <h2>Comuna</h2>
                                      </v-expansion-panel-header>
                                      <v-expansion-panel-content>
                                        <v-btn
                                        v-for="(item, index) in comunas" :key="index"
                                          class="ma-2"
                                          depressed
                                          color="cyan"
                                          @click="com = index"
                                        >
                                          {{comunas[index].comuna}}
                                        </v-btn>
                                        <br />
                                        <br />
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
                    </div>
                  </v-col>

                  <v-col cols="10">
                    <div style="border: 1px solid powderblue">
                      <br />
                    <mapa
                      :url="this.comunas[com].mapaUrl"
                      :width="this.comunas[com].width"
                      :height="this.comunas[com].height"
                      :palabras="this.comunas[com].palabras"
                    />
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-sheet>
        </v-card>
        <div class="screen">
        </div>
      </v-container>
    </div>
    {{$data}}
  </v-app>
</template>

<script>
const axios = require("axios");
import mapa from './mapa.vue'
export default {
  name: "App",

  components: {
    mapa 
  },
  data() {
    return {
      palabras: [],
      com: 0,
      comunas:[
        {"comuna": "Montería", "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1Z3zNCXWCoFiz-3CXLTI--4yoougXbSqd&ehbc=2E312F","width":830, "height":600,}, //general
        {"comuna": 1, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1sGtUBNn1t56F-_vN1VeBfTLqD4chOREw&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 2, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1yhzIKq2qRtst39cyyjdRf-3K5RulXZr2&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 3, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1kfVWDlnRBb7tg8CBa12o3KPOPUaKt4sG&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 4, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=12-F1xq5M3_vEd1GBFWdiwteEZtiQORlK&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 5, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=13K7BndeZl5plt5Yr_CZ5KZOznVSldQf9&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 6, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1Dfkk95_HPtpsBDOwna606s3clZ_Jnfax&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 7, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1pb6yRMcQ0zbuf_vIqdFejKs4vZ-npMJK&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 8, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1wBKoV-ra23aHoaZ_7u64Md49XNAhcNMg&ehbc=2E312F","width":610, "height":500, "palabras":[],},
        {"comuna": 9, "mapaUrl": "https://www.google.com/maps/d/u/0/embed?mid=1S9Rvg4EQQ011fMVDf7Pv7B5j3nMkKgPq&ehbc=2E312F","width":610, "height":500, "palabras":[],}
      ],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:4000/");
    this.palabras = response.data;
    console.log(response.data);

    for (let index = 1; index < this.comunas.length; index++) {
      for (let i = 0; i < this.palabras.length; i++) {
        if (this.palabras[i].comuna.length > 1){
          for (let j = 0; j < this.palabras[i].comuna.length; j++) {
            if(this.palabras[i].comuna[j] == index){
              this.comunas[index].palabras.push(this.palabras[i])
            }
          }
        }else{
            if(this.palabras[i].comuna[0] == index){
              this.comunas[index].palabras.push(this.palabras[i])
            }
        }
      }
    }
  },
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
