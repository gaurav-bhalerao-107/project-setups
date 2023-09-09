<template>
  <main class="">
    <section class="hero-section-main">
      
    </section>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    return {
      test_variable: ref(false),
      openedFaq: ref(1)
    
    }
  },

  methods: {
    openFaqBlock(openFAQNumber){
      if(this.openedFaq == openFAQNumber){
        this.openedFaq = 0
      }
      else{
        this.openedFaq = openFAQNumber;
      }
    }
  }
})
</script>

<style>

</style>