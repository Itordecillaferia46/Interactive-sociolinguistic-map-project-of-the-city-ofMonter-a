<template>
  <div class="fondo">
    
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container
            responsive
            style="height: 30%; max-width: 930px; width: 720%"
          >
            <v-row>
              <v-col>
                
                <br>
                <br>
                <br>
                <br>
                <h2 class="fuente"  justify="center">
              Mapa sociolingüístico interactivo de la</h2>
              <h2 class="fuente" >         ciudad de Montería
            </h2>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
              
           
                
                <div class="text-center">
                  <router-link :to="{ name: 'contenido' }">
                    <v-btn
                      class="letraB"
                      width="220"
                      rounded
                      color="primary"
                      dark
                      ><b>Ingresar</b></v-btn
                    >
                  </router-link>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
  
    
    <v-footer dark padless>
      <v-card color="#4492EB" class="flex" flat tile height="160">
        <v-card-text class="white--text">
          <div class="footer-copyright py-2 text-center">
            <center>
              <a
                ><img
                  src="https://i.ibb.co/wrHYvq2/unicor.png"
                  width="150"
                  height="100"
                  class="d-inline-block align-top"
                  alt=""
              /></a>
            </center>

            © UNIVERSIDAD DE CORDOBA
          </div>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-footer dark padless>
      <v-card color="#4492EB" class="flex" flat tile> </v-card>
    </v-footer>
  </div>
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
.fondo1 {
  height: 560px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.letraB {
  font: oblique bold 80px cursive;
}
.fuente{
  color: black
}
</style>
