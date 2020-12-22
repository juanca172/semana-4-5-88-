<template>
    <v-data-table
    :headers="headers"
    :items="articulos"
    sort-by="codigo"
    class="elevation-1"
    :loading= "cargando"
    loading-text="Cargando... por favor espere"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Articulo</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nuevo Articulo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>

                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="ID"
                    ></v-text-field>
                  </v-col>


                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="NombreArticulo"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-select
                      v-model="editedItem.categorium.nombre"
                      label="Nombrecategoria"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                      counter = "254"
                    ></v-textarea>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>

                  
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Estas seguro de querer cambiar el estado?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
      <template v-if = "item.estado">
        mdi-toggle-switch
      </template>
      <template v-else>
        mdi-toggle-switch-off-outline
      </template>

      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    <pre>
        {{ $data.categoria}}
    </pre>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando:true,
      headers: [
        {text: "ID",value: "id"},

        {

          text: 'NombreArticulo',
          align: 'start',
          sortable: true,
          value: 'nombre',
        },
        { text: 'Categoria', value: 'Categorium.nombre' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Estado', value: 'estado' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      articulos:[],
      categorias:[],
      categorium:{},
      editedIndex: -1,


      editedItem: {
        id:0,
        nombre: "",
        descripcion: "" ,
        estado: 0,
        codigo:"",
        categorium:{
          id:0,
          nombre:"",
        }
              
      },
      defaultItem: {
        id:0,
        nombre: "",
        descripcion: "" ,
        estado: 0,
        codigo:"",
        categorium:{
          id:0,
          nombre:""
        }
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Articulo' : 'Editar Articulo'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {

      this.listArticulos();
      this.listCat();
      
      
      
    },
    methods: {
      listArticulos(){
          this.$http.get("/api/Articulo/list")
          .then(response =>{
              this.articulos = response.data;
              this.cargando = false;

          })
          .catch(error =>{
              console.log(error)
              return error;
          })
      },
      listCat(){
          this.$http.get("/api/categoria/list")
          .then(response =>{
              this.categorias = response.data;

          })
          .catch(error =>{
              console.log(error)
              return error;
          })
      },
      
      
      editItem (item) {
        this.editedIndex = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        if (this.editedItem.estado === 1) {
          this.$http.put("/api/Articulo/deactivate",{
            "id": this.editedItem.id,
           
          })
          .then(response =>{
              this.list()

          }).catch(error => { 
              return error ;
              console.log(error)
              
          })
          
          
        } else {
          this.$http.put("/api/Articulo/activate",{
            "id": this.editedItem.id,
              })
          .then(response =>{
              this.list()
          }).catch(error =>{
              return error;
          })
         
          
        }        
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          this.$http.put("/api/Articulo/update",{
            "id": this.editedItem.id,
           "nombre": this.editedItem.nombre, 
          "descripcion" : this.editedItem.descripcion,
          "codigo" : this.editedItem.codigo,

          })
          .then(response =>{
              this.list()

          }).catch(error => { 
              return error ;
              console.log(error)
              
          })
          
          
        } else {
          this.$http.post("/api/Articulo/add",{
                
            "id": this.editedItem.id,
           "nombre": this.editedItem.nombre, 
          "descripcion" : this.editedItem.descripcion, 
          "estado" : 1  })

          .then(response =>{
              this.list()
          }).catch(error =>{
              return error;
          })
         
          
        }
        this.close()
      },
    },
  }
</script>
