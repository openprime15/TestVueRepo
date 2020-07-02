<template>
  <v-app>
    <v-app-bar app color="red accent-1" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-link to="/">
        <v-btn>Home</v-btn>|
      </router-link>

      <router-link to="/write_goal">
        <v-btn>목표 쓰기</v-btn>
      </router-link>
      <router-link to="/testpage">
        <v-btn>테스트페이지</v-btn>
      </router-link>
      <router-link to="/testpage2">
        <v-btn>테스트페이지2</v-btn>
      </router-link>
      <router-link to="/testpage3">
        <v-btn>테스트페이지3</v-btn>
      </router-link>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
