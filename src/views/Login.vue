<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <v-form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          @submit.prevent="loginUser"
        >
          <h1 class="h3 mb-3 font-weight-normal" style="textalign: center">
            Iniciar de sesión
          </h1>

          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-hover v-slot="{ hover }" disabled>
                <v-card
                  :elevation="hover ? 12 : 2"
                  class="mx-auto"
                  height="350"
                  max-width="350"
                >
                  <v-card-text class="my-4 text-center title">
                    <v-text-field
                      type="text"
                      id="email"
                      class="form-control mb-5"
                      v-model="login.email"
                      :rules="emailRules"
                      placeholder="Email"
                      required
                    ></v-text-field>
                    <!-- Password -->

                    <v-text-field
                      type="password"
                      id="password"
                      class="form-control mb-5"
                      placeholder="Contraseña"
                      v-model="login.password"
                      :counter="10"
                      :rules="nameRules"
                      required
                    ></v-text-field>
                    <!-- inicio sesion button -->
                    <center>
                      <button
                        class="btn btn-primary btn-block w-75 my4"
                        type="submit"
                      >
                        Iniciar de sesion
                      </button>
                    </center>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await this.$http.post(
          "/api/usuario/login",
          this.login
        );
        const token = response.data.tokenReturn;
        localStorage.setItem("accessToken", token);
        if (token) {
          swal("Exitoso", "login exitoso", "success");
          this.$router.push("/categoria");
        }
      } catch (err) {
        swal("Error", "datos incorrectos", "error");
        console.log(err.response);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
