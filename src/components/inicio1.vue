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
                  <router-link :to="{ name: 'contenido' }" class="noneline">
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
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
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
