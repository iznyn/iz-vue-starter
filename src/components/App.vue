<template>
  <v-app>
    <div class="app--main">
      <v-content>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-content>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  beforeMount () {
  },
  components: {
  },
  methods: {
  }
}
</script>
<style lang="scss">
  @import '@styles/index.scss';
</style>
