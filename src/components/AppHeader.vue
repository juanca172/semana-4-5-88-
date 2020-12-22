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
    <v-base-nav class="navbar-main" transparent type="" effect="light" expand>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <div class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/Market88-102727331726788" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </div>
                <div class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </div>
            </ul>
        </v-base-nav>
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



