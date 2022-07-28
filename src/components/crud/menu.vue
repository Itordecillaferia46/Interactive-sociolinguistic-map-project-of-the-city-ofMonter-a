<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    horizontal
  >
    <v-btn>
      <span>Agregar</span>

      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn>
      <span>Administrar</span>

      <v-icon>mdi-lead-pencil</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>