<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="730" max-height="600">
         
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Z3zNCXWCoFiz-3CXLTI--4yoougXbSqd&ehbc=2E312F" width="730" height="500"></iframe>
        </v-card>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  data(){
    return{
      palabras: [],
    }
  },
}

//  async mounted(){
//     let response = await axios.get("");
//     this.palabras = response.data;
//     console.log(response.data)
//     },

//   methods:{
//     async eliminar(id){
//       let response = await axios.delete("" + id)
//       console.log(response)
//     },

</script>


<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}
.borB {
  height: 170px;
  width: 250px;
  border-radius: 1rem;
  height: 100px;
  width: 175px;
}
.contenedormap1 {
  height: 600px;
  width: 1100px;
}
</style>
