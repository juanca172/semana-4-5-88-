<template>
  <div>
    <v-carousel>
      
       <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition" 
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;">
    </v-carousel-item>
</v-carousel>
  </div> 
</template> 
<script>
    import Vue from 'vue'
    import { CarouselPlugin } from 'bootstrap-vue'
    Vue.use(CarouselPlugin)
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'

    export default {
        data() {
            return {
                    items: [
                        {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rWddYdIyu5EBOLYOlb3K_cW90LdT122FHQ&usqp=CAU",
                        },
                        {
                            src: 'https://agenciadigitalamd.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/10/marketing-automation-agencia-digital-ID.jpg.webp',
                        },
                        {
                            src: 'https://www.iebschool.com/blog/wp-content/uploads/2016/02/marketingdigital_.jpg',
                        },
                        {
                            src: 'https://www.esic.edu/sites/default/files/rethink/89a8a7b6-screenshot-2018-01-24-at-12.36.53.png',
                        },
                    ],
            }
        }
    };
</script>