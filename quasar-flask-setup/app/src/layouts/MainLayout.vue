<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-py-md">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          size="lg"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="margin-top:2px">
          Quasar & Flask Setup
        </q-toolbar-title>

        <div id="clock">
          <!-- {{ currentTime() }} -->
          <q-btn class="q-px-lg q-py-sm q-mt-xs" icon-right="logout"> Logout &nbsp;</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="350"
        bordered
        elevated
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list>
            <q-item active clickable v-ripple class="q-py-md">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-py-md">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Customer Details
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-py-md">
              <q-item-section avatar>
                <q-icon name="feedback" />
              </q-item-section>

              <q-item-section>
                Feedbacks
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Gaurav Bhalerao</div>
            <div>@gauravbhalerao</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: false,
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },

    currentTime() {
      let today = new Date(); 
      let date = today.getDate();
      let month = today.getMonth();
      let year = today.getFullYear();
      let day = today.getDay();

      if(date < 10){
        date = '0'+date
      }

      if(month < 10){
        month = '0'+month
      }

      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      return days[day]+', ' +date+'-'+month+'-'+year;
    }
  }
})
</script>
