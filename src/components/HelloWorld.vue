<template>
    <div container background="dark">
        <app-header> </app-header>
        <div class="position-relative">
             <!-- shape Hero -->
            <v-section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <carousel></carousel>
                        <div class="row">
            

                            <div class="col-lg-6">
                            </div>
                        </div>
                    </div>
                </div>
            </v-section>
            <!-- 1st Hero Variation -->
        </div>
        <v-section class="section section-shaped my-0 overflow-hidden" id="services">
            <div class="container pt-lg pb-100">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 p class="lead text-dark text-center">Nuestro compromiso está en brindar soluciones efectivas a nuestros clientes por medio
                           de productos eficaces y eficientes.</h2>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <v-img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,w_360/v1608589180/INFLUENCERS_yynek2.png">
                        </v-img>
                        <h2 class="text-dark mt-3 text-center">Marketing con influencers</h2>
                        <p class="text-white mt-3">El marketing de influencers es una novedosa estrategia de marketing que consiste en lograr una serie de vínculos de 
                          colaboración entre las marcas y las empresas y aquellas personas con una gran visibilidad y protagonismo en internet, a las que se conoce como 'influencers'.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <v-img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,w_365,h_256/v1608589173/INTELIGENCIA_ARTIFICIAL-01_yzf4ii.png">
                        </v-img>
                        <h2 class="text-white mt-3 text-center">Inteligencia Artificial</h2>
                        <p class="text-white mt-3">La IA puede analizar el comportamiento del consumidor y los patrones de búsqueda, utilizar datos de plataformas de redes 
                          sociales y publicaciones de blog para ayudar a las empresas a comprender cómo los clientes encuentran sus productos y servicios.   </p> 
                    </div>
                    <div class="col-lg-4">
                        <v-img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,w_380,h_265/v1608589161/MARKETING-01-01_eexso2.png"> 
                        </v-img>
                        <h2 class="text-white mt-3 text-center">Video Marketing</h2>
                        <p class="text-white mt-3">Según el informe de Mondo: The mondo Creative & Digital Trends, el video marketing seguirá siendo la estrategia
                          preferida de marketing digital para el 2019 y 2020. La encuesta, realizada a más de mil directores de marketing digital.
                        </p>
                    </div>
                </div>
            </div>
        </v-section>
         <v-section class="section-shaped my-0" id="news">
                <div class="shape shape-style-1 shape-default shape-skew">
                    
                </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 ustify-content-center">
                      <h5 p class="description mt-3 text-center">"Trabajamos en pro de satisfacer cada una de las necesidades de nuestros clientes, lo que piensan de nosotros algunos clientes." <br>
                                   </h5>
                        <div class="row row-grid veutify-content-center">
                            <div class="col-lg-4 veutify-content-center">
                              
                                <v-card class="border-6" hover shadow body-classes="py-5">
                                    <v-img width="120" height="120" margin-left="400" aria-hidden="true" src="https://www.trecebits.com/wp-content/uploads/2019/02/Persona-1-445x445.jpg" type="primary" rounded class="mb-4">
                                    </v-img>
                                    <h6 class="text-primary text-uppercase">Margareth - Claro</h6>
                                    <p class="description mt-3">"Hemos encontrado en market88 un aliado para crecer en redes y
                                        y así aumentar nuestras ventas. Excelente servicio." <br>
                                    </p>
                                </v-card>
                            </div>
                            <div class="col-lg-4">
                                <v-card class="border-0" hover shadow body-classes="py-5">
                                    <v-img width="120" height="120" src="https://i.pinimg.com/originals/cf/c1/d8/cfc1d8b69811d4bacb1377e39d5a74c9.jpg" type="success" rounded class="mb-4">
                                    </v-img>
                                    <h6 class="text-success text-uppercase">Omar - Netflix</h6>
                                    <p class="description mt-3">"Trabajar de la mano de tan excelentes profesionales, es gratificante. 
                                        Excelente servicio y calidad humana de todos sus colaboradores"<br></p> 
                                    
                                </v-card>
                            </div>
                            <div class="col-lg-4">
                                <v-card class="border-0" hover shadow body-classes="py-5">
                                    <v-img width="140" height="120" src="https://static.vix.com/es/sites/default/files/styles/large/public/imj/vivirsalud/L/Las-caracteristicas-de-los-diferentes-tipos-de-rostros-2.jpg" type="warning" rounded class="mb-4">
                                    </v-img>
                                    <h6 class="text-warning text-uppercase">Liliam - Ramo</h6>
                                    <p class="description mt-3">"Desde que empezamos a trabajar con Market88 nuestro posicionamiento en redes
                                           ha crecido en un 100% y las ventas asesoradas han aumentado un 125%."<br></p>
                                    
                                </v-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-section>
        <v-section class="section section-lg text-center" id="team">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-center">El equipo de trabajo</h2>
                        <p class="lead text-muted text-center">Este es nuestro gran equipo de trabajo, reunimos los mejores para ofrecer lo mejor
                                                   a nuestros clientes.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,w_170/v1607144096/WhatsApp_Image_2020-11-28_at_11.28.54_PM_1_x18gvw.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Juan Camilo Fonseca</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-google" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,w_150/v1607137239/vivi_uo0iip.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Viviana Marcela Chacón</span>
                                    <small class="h6 text-muted">Web Designer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.google.com/intl/es-419/gmail/about/" type="primary" icon="fa fa-google" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,h_120,w_120/v1607144629/Captura_de_Pantalla_2020-12-05_a_la_s_12.03.07_a._m._oyatic.png"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Carlos Daniel Escudero</span>
                                    <small class="h6 text-muted">Backend Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.google.com/intl/es-419/gmail/about/" type="info" icon="fa fa-google" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="https://res.cloudinary.com/dkgxa2bjf/image/upload/c_scale,h_220,w_220/v1607144107/WhatsApp_Image_2020-11-28_at_4.39.25_PM_yt7tme.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Robinson Martinez</span>
                                    <small class="h6 text-muted">Scrum Master</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://www.google.com/intl/es-419/gmail/about/" type="success" icon="fa fa-google" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </v-section>
        <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <app-footer></app-footer>
                        <div class="row">
            

                            <div class="col-lg-6">
                            </div>
                        </div>
                    </div>
                </div>
    </div>
 
</template>

<script>
import AppHeader from './AppHeader.vue';
import VueJwtDecode from "vue-jwt-decode";
import Carousel from './Carousel.vue';
import AppFooter from './AppFooter.vue';
 import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'

export default {
     components : {
    AppHeader,
    Carousel,
    AppFooter,
   },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("accessToken");
      let decoded = VueJwtDecode.decode(token);
      console.log("hola decode", decoded);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("accessToken");
      this.$router.push("/login");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>
<style scoped>
router-link {
  font: 1em sans-serif;
  text-decoration: none;
}
</style>