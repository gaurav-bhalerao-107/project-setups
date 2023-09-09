<template>
  <q-layout view="lHh Lpr lFf">
    <header class="header-main" id="header-main">
      
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      openSidebar: ref(false),
      test_variable: ref(false)
    }
  },

  methods: {
    toggleSidebar(){
      this.openSidebar = !this.openSidebar
    }
  }
})
</script>
