<template>
  <v-card
    class="mx-auto"
    max-width="3000"
  >
    <v-img
      class="white--text align-end"
     height="524px"
     width="1420px"
      src="https://i.ibb.co/nBzVxNc/imgN2.png" alt="imgN2"
    >
      <v-card-title></v-card-title>
    </v-img>

   

    <v-card-text class="text--primary">
      

      
      <div class="text-center">
                  <router-link :to="{ name: 'home' }" class="noneline">
               <v-btn
      class="ma-2"
       rounded
      outlined
       width="230"
      color="primary"
         dark
    >
      Ingresar
    </v-btn>
      </router-link>
       </div>
      
    </v-card-text>

    <v-card-actions>
     <v-avatar>
      <img
        src="https://i.ibb.co/0fHsR36/apoyo.png"
        alt="admin"
      >
    </v-avatar>
    
 
      <v-btn
        color="green"
        text
      >
        Acceder
      </v-btn>
       <v-row justify="space-around">
    <v-col >
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="900"
      >
        <template v-slot:activator="{ on, attrs }">
         
          <v-btn
           v-bind="attrs"
            v-on="on"
        color="orange"
        text
      >
        Explorar
      </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            
            <v-card-text>
              <div class="text-h2 pa-12">   <v-btn
      class="ma-2"
      outlined
      color="primary"
      href="https://diccionario-electronico.herokuapp.com/#/"
    >
     Diccionario electrónico del habla popular de los valles de los ríos Sinú y San Jorge
    </v-btn></div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    </v-row>


    </v-card-actions>
    <center>
    <v-card-text class="blue--text">
        {{ new Date().getFullYear() }} — <strong>Universidad de Córdoba</strong>
      </v-card-text>
      </center>
  </v-card>
  
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
