<template>
  <v-app>
    <div class="fondo-p" color="ffff">
      <div>
        <br>

    <v-toolbar
    
      color="#4492EB"
      dark
      extended
      flat
    >
    
    <div class="titulo"  style="border: 0px solid powderblue">
    <center>
     <router-link :to="{ name: 'inicio' }" class="noneline">
            <h2 class="fuente" style="color: rgb(247, 252, 252)" justify="center">
              Mapa sociolingüístico interactivo de la</h2>
              <h2 class="fuente" style="color: rgb(247, 252, 252)">         ciudad de Montería
            </h2>
          </router-link>
          </center>
      </div>
    </v-toolbar>

   
      </div>
      <div class="fondo-p">
        
          <v-container fluid>
            <v-row>
              <v-col cols="3">
                <v-row>
                <div class="divcomuna" style="border: 0px solid powderblue ">
                  <h3>Comuna:</h3>
                </div>
                </v-row>
                <br>
                <v-row>
                <div class="divbarrios" style="border: 0px solid powderblue ">
                  <p>Aqui se muestran los barrios</p>
                </div>
                </v-row>
                <br>
                <v-row>
                <div class="divjerga" style="border: 0px solid powderblue ">
                  <p>Aqui se muestran los terminos o jergas seleccionadas</p>
                </div>
                </v-row>
              </v-col>

              <v-row>
                <v-col aling="left" justific="center">
                  <v-main
                    color="rgb(255, 0, 0, 0.2)"
                    style="border: 1px solid powderblue"
                    class="fondoprincipal"
                    fixed
                  >
                    <router-view></router-view>
                  </v-main>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        
      </div>
    </div>
  </v-app>
</template>


<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.fondo-p {
  height: 800px;
  background-color: #4492EB;
}
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}

#alpha {
  background-color: rgba(200, 208, 231, 0.5);
  height: 2em;
  width: 150px;
  position: absolute;
  top: 10px;
  color: #fff;
  text-align: center;
  padding-top: 1em;
}
.fondoprincipal {
  background-color: #4492EB;
  color: #fff;
  border-radius: 2rem;
  height: 700px;
  width: 1100px;
  
  

}
.titulo{
  border-radius: 2rem;
  height: 70px;
  width: 650px;
  background-color: #7AB0EE;
}
.divcomuna{
  border-radius: 2rem;
  background-color: #7AB0EE;
  width: 230px;
  height: 40px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;
  

}
.divbarrios{
   border-radius: 2rem;
  background-color: #7AB0EE;
  width: 230px;
  height: 140px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;

}
.divjerga{
  border-radius: 2rem;
  background-color: #7AB0EE;
  width: 230px;
  height: 200px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;

}
</style>