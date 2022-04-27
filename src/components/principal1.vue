<template>
  <v-app>
    <div class="colorfondo">
      <v-container fluid>
        <v-card class="overflow-hidden">
          <v-app-bar
            absolute
            color="#0CEAD9"
            dark
            height="100"
            scroll-target="#scrolling-techniques-2"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title
              ><h4>Mapa sociolingüístico interactivo</h4>
              <h4>de la ciudad de Montería</h4></v-app-bar-title
            >

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
          <v-sheet max-height="700">
            <v-container style="height: 1000px;">
              <br />
              <br />
              <br />
              <br />
              <br />

              <div>
                <v-row>
                  <v-col cols="4">
                    <div>
                      <v-card class="mx-auto" max-width="600" outlined>
                        <v-card class="mx-auto" max-width="400" outlined>
                          <v-card-text class="pb-0">
                            <v-row>
                              <v-col>
                                <h2>Comuna:</h2>
                              </v-col>
                              <v-col>
                                <div
                                  style="border: 1px solid powderblue"
                                  class="div-select"
                                >
                                  <v-container fluid>
                                    <v-row align="center">
                                      

                                      <v-col class="d-flex" cols="12" sm="12">
                                        <v-select
                                          :items="items"
                                          label="Seleccionar Comuna"
                                          dense
                                          outlined
                                          
                                        ></v-select>
                                      </v-col>

                                    </v-row>
                                  </v-container>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card-text>
                          <br />
                          <v-card-text class="text--primary" max-width="344">
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
                          </v-card-text>
                          <br />
                          <br />
                          <br />

                          <v-card-actions>
                            <v-btn color="primary" text>
                              View
                            </v-btn>

                            <v-btn color="orange" text>
                              Explore
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-card>
                    </div>
                  </v-col>

                  <v-col cols="8">
                    <div style="border: 0px solid powderblue">
                      <router-view></router-view>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-sheet>
        </v-card>
        <div class="screen">
          <!-- code -->
          <div class="innerdiv">
            <a
              ><img
                src="https://i.ibb.co/2ScB3CR/l.png"
                width="150"
                height="100"
                class="d-inline-block align-top"
                alt=""
            /></a>
          </div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    items: ["1", "2", "3", "4", "5", "6"],
  }),
  computed: {
    likesAllFruit() {
      return this.selectedCommunen.length === this.comuna.length;
    },
    likesSomeFruit() {
      return this.selectedCommunen.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },

  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedCommunen = [];
        } else {
          this.selectedCommunen = this.comuna.slice();
        }
      });
    },
  },
};
</script>

<style>
.divbarrios {
  border-radius: 1rem;
}
.colorfondo {
  background-color: #152289;
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
