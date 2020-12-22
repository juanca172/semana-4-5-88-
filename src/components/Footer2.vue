<template>
  <div>
    <v-container
      
    >
      <v-row
        :align="Left"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          
        >
          <v-card color="#9E9E9E" 
           
            outlined
            tile
            text-center
            align-sm-content-space-around
            
          

          >
          <p class="text-white">
            SERVICIO AL CLIENTE <br>
            Horario de atención online:<br>
            Lunes a Domingo de 10a.m a 8p.m<br>
            Celular: (+571) 3143306000 <br>
            Email: market88_contacto@market88.co <br>
            Email: market88_soporte@market88.co <br><br><br><br>
            </p>
            
          </v-card>
          
        </v-col>
        <v-col
          
        >
          <v-card color="#9E9E9E" 
           
            outlined
            tile
            text-left
            
          >
            NUESTRAS TIENDAS <br>
            SEDE PRINCIPAL <br>
            Carrera 15 # 133-33 -
            Bogotá, Colombia <br>
            Teléfono: (+571) 46634324 <br>
            Carrera 34 No. 23 – 38  <br>
            Piso 3, Local: 3-36 <br>
            Bucaramanga<br><br>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>