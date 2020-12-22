<template>
   <div class="container">
    <div class="header red">
      <div class="container-menu ">
        <v-navbar>
             <v-tabs>
    <v-tab><a href="#" class="main-menu__link">Inicio</a></v-tab>
    <v-tab><a href="#services" class="main-menu__link">Servicios</a></v-tab>
    <v-tab> <a href="#news" class="main-menu__link">Testimonios</a></v-tab>
     <v-tab><a href="#team" class="main-menu__link">Equipo</a></v-tab>
  </v-tabs>
          
        </v-navbar>
      </div>
      <div class="container-imagen"></div>
    </div>
</div>
    </template>
    
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
