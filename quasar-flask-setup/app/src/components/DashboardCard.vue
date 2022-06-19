<template>
  <section>
    <q-card class="card-1" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="text-h4 flex items-center q-px-md">
          {{ value }}
        </q-card-section>
        <q-separator vertical />
        <q-card-section class="text-h6 flex items-center">
          <q-item>
            <q-item-section class="">
              <q-item-label lines="1">{{ title }}</q-item-label>
              <q-item-label caption>{{ caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card-section>
    </q-card>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardCard',

  props: {
    title: {
      type: String,
      default: 'Total Customers'
    },

    caption: {
      type: String,
      default: 'This Month'
    },

    value: {
      type: String,
      default: '10'
    },
  }

})
</script>