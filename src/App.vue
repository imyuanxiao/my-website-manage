<script setup lang="ts">
import Layout from "./layout/Layout.vue";
</script>

<template>

  <router-view v-if="!isUserLoggedIn"></router-view>
  <Layout v-else></Layout>

</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn'
    })
  }
}
</script>
<style scoped>

</style>
