<template>
    <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="nombre"
    class="elevation-1"
    :loading= "cargando"
    loading-text="Cargando... por favor espere"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Usuario</v-toolbar-title>
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
              Nuevo usuario
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
                      v-model="editedItem.nombre"
                      label="NombreUsuario"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-select
                      v-model="editedItem.rol"
                      label="ROL"
                      :item= usuarios
                      item-text="rol"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-textarea
                      v-model="editedItem.email"
                      label="Correo"
                    ></v-textarea>
                  </v-col>

                  <v-col
                    cols="12"
                    
                  >
                    <v-textarea
                      v-model="editedItem.password"
                      label="contraseña"
                    ></v-textarea>
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
import axios from "axios"
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando:true,
      headers: [
        {text: "ID",value: "id"},
        {text: "Rol",value: "rol"},
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'nombre',
        },
        { text: 'Correo', value: 'email' },
        { text: 'contraseña', value: 'password' },
        { text: 'Estado', value: 'estado' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      usuarios:[],
      usuario:"",
      editedIndex: -1,
      editedItem: {
        id:0,
        rol: "",
        nombre: '',
        password: "" ,
        email: "",
        estado:""
        
      },
      defaultItem: {
        id:0,
        rol: "",
        nombre: '',
        password: "" ,
        email: "",
        estado:""
       
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
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
      
      this.list()
      
    },
    methods: {
      list(){
          this.$http.get("/api/usuario/list")
          .then(response =>{
              this.usuarios = response.data;
              this.cargando = false;
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
          this.$http.put("/api/usuario/deactivate",{
            "id": this.editedItem.id,
           
          })
          .then(response =>{
              this.list()
          }).catch(error => { 
              return error ;
              console.log(error)
              
          })
          
          
        } else {
          this.$http.put("/api/usuario/activate",{
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
          this.$http.put("/api/usuario/update",{
           "id": this.editedItem.id,
           "nombre": this.editedItem.nombre, 
           "rol" : this.editedItem.rol,
           "password":this.editedItem.password,
           "email":this.editedItem.email
          })
          .then(response =>{
              this.list()
          }).catch(error => { 
              return error ;
              console.log(error)
              
          })
          
          
        } else {
          this.$http.post("/api/usuario/add",{
            "nombre": this.editedItem.nombre, 
            "rol" : this.editedItem.rol, 
            "email":this.editedItem.email,
            "password":this.editedItem.password,
            })
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
