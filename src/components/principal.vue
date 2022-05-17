<template>
  <v-app>
    <div class="fondo-p" color="white">
      <div>
        <br />

        <v-toolbar color="#4492EB" dark extended flat>
          <div class="titulo" style="border: 0px solid powderblue">
            <center>
              <router-link :to="{ name: 'inicio' }" class="noneline">
                <h2
                  class="fuente"
                  style="color: rgb(247, 252, 252)"
                  justify="center"
                >
                  Mapa sociolingüístico interactivo de la
                </h2>
                <h2 class="fuente" style="color: rgb(247, 252, 252)">
                  ciudad de Montería
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
                  <v-col>
                    <div>
                      <h3>Comuna :</h3>
                      <select name="select" class="select-css">
                        <option value="value1"> 1</option>

                        <option value="value2"> 2</option>
                        <option value="value3"> 3</option>
                        <option value="value3"> 4</option>
                        <option value="value3"> 5</option>
                        <option value="value3"> 6</option>
                       <option value="value3"> 7</option>
                        <option value="value3"> 8</option>
                        <option value="value3"> 9</option>
                      </select>
                    </div>
                  </v-col>
                </div>
              </v-row>
              <br />
              <br />
              <br />
              <br />
              <v-row>
                <div class="divbarrios" style="border: 0px solid powderblue ">
                 
                  <p>ccccddd</p>
                </div>
              </v-row>
              <br />
              <br />
              <v-row>
                <div class="divjerga" style="border: 0px solid powderblue ">
                  <p>Aqui se muestran lo</p>
                </div>
              </v-row>
            </v-col>

            <v-row>
              <v-col aling="left" justific="center">
                <v-main
                  color="rgb(255, 0, 0, 0.2)"
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
import axios from "axios";

// class Task {
//   constructor(communen, title, description) {
//     this.communen = communen;
//     this.title = title;
//     this.description = description;
//   }
// }
export default {
  name: "App",

  data: () => {
    return {
     
    };
  },
   async mounted(){
    let response = await axios.get("https://backend-proyectomapv1.herokuapp.com/palabra/");
    this.palabras = response.data;
    console.log(response.data)
    },
    
methods: {


}

};
</script>

<style>
.fondo-p {
  height: 800px;
  background-color: #4492eb;
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
  background-color: #4492eb;
  color: #fff;
  border-radius: 2rem;
  height: 700px;
  width: 1100px;
}
.titulo {
  border-radius: 2rem;
  height: 70px;
  width: 650px;
  background-color: #7ab0ee;
}
.divcomuna {
  border-radius: 2rem;
  background-color: #7ab0ee;
  width: 230px;
  height: 40px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;
}
.divbarrios {
  border-radius: 2rem;
  background-color: #7ab0ee;
  width: 230px;
  height: 140px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;
}
.divjerga {
  border-radius: 2rem;
  background-color: #7ab0ee;
  width: 230px;
  height: 200px;
  color: rgb(247, 252, 252);
  text-align: center;
  margin-left: 15px;
}
.select-css {
  display: block;
  font-size: 16px;
  font-family: "Verdana", sans-serif;
  font-weight: 400;
  color: #444;

  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 70px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
  border-radius: 0.3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
</style>
