<template>
 <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      
    >
    <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item
      :to = "{name : 'Home'}">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

  

        <v-list-group
          :value="false"
          no-action
         
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
          :to = "{name : ruta }"
            v-for="([title, icon, ruta], i) in admins"
            :key="i"
            exact
            
            
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
         
          :value="false"
          no-action 
        >
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Usuario</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            :to = "{name : ruta2}"
            v-for="([title, icon, ruta2], i) in cruds"
            :key="i"
            exact
             
            
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
    
    </v-list>
  </v-card>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader';
import HelloWorld from './components/HelloWorld';
import AppFooter from './components/AppFooter';


export default {
  name: 'App',

  components: {
    HelloWorld,
  },

     data: () => ({
        drawer: null ,
        admins: [
        ['Categoria', 'mdi-file-eye', 'Categoria'],
        ['Articulos', 'mdi-map-search', 'Articulo'],
      ],
      cruds: [
        ['Usuario', 'mdi-account-outline', 'Usuario'],
        ['login', 'mdi-account-outline', 'Login']
        
      ],
        }),
};
</script>
