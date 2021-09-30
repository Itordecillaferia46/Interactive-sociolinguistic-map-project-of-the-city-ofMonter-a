<template>
<div class="contenedor1">
 <br>
 <center><h2><b>Equipo de trabajo</b></h2></center>
 <br>
  
    <v-row>
      <v-col>
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://i.ibb.co/6R9r06V/Isaacimg.jpg"
      height="210px"
    ></v-img>

    <v-card-title>
     Isaac Daniel Tordecilla Feria
    </v-card-title>

    <v-card-subtitle>
      itordecillaferia46@correo.unicordoba.edu.co

    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        Detalles
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://i.ibb.co/3MH2CXM/Maira.jpg"
      height="210px"
    ></v-img>

    <v-card-title>
      Maira Alejandra Morales Ramos
    </v-card-title>
    
    <v-card-subtitle>
mmoralesramos@correo.unicordoba.edu.co

    </v-card-subtitle>
    

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
       Detalles
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
  <v-col>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://i.ibb.co/MGdFczc/Aly.png"
      height="210px"
    ></v-img>

    <v-card-title>
      Culchac de la Vega Aly Ben-Hur
    </v-card-title>

    <v-card-subtitle>
      Docente a cargo
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        Detalles
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
           Licenciado en Informática Educativa y Medios Audiovisuales, Ingeniero de Sistemas de la Universidad San Martín, Esp. en Administración de la Informática Educativa, Aspirante a magister en Gestión de la Tecnología Educativa.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    
  </v-col>
    </v-row>
  
</div>
 
</template>
<script>
export default {
    data: () => ({
      show: false,
    }),
  }
        
</script>
<style >
.contenedor1 {
  height: 500px;
  width: 1208px;
}

</style>
