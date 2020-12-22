<template>
  <v-footer
    color="#6f6d6d"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        href="https://github.com/juanca172/semana-4-5-88-"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="#6f6d6d py-4 text-center white--text"
        cols="12"
        
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Github',
      
      ],
    }),
  }
</script>