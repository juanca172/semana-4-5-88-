import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);



export default new Vuetify({
  
    theme: { 
    ligth: {
      primary: colors.red.lighten3,
      
      
    },
  }
  })


  