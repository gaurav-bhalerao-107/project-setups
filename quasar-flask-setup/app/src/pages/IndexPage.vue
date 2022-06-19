<template>
  <q-page class="">
    <section class="row">
      <DashboardCard class="col q-px-md q-pt-lg q-pb-xs" title="Daily Earnings" value="10" caption="Today" />
      <DashboardCard class="col q-px-md q-pt-lg q-pb-xs" title="Monthly Earnings" value="100" caption="This Month" />
      <DashboardCard class="col q-px-md q-pt-lg q-pb-xs" title="Average Earnings" value="1000" caption="This Month" />
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import DashboardCard from "components/DashboardCard";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "IndexPage",

  components: {
    DashboardCard,
  },

  setup() {
    const scroll = ref(null);

    const scroll_left = () => {
      return scroll.value.scrollLeft -= 40
    }

    const scroll_right = () => {
      return scroll.value.scrollLeft += 40
    }

    const rows = [
      {
        id: 1,
        name: 'Frozen Yogurt',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash"
      },
      {
        id: 2,
        name: 'Ice cream sandwich',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 3,
        name: 'Eclair',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 4,
        name: 'Cupcake',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 5,
        name: 'Gingerbread',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 6,
        name: 'Jelly bean',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash"
      },
      {
        id: 7,
        name: 'Lollipop',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 8,
        name: 'Honeycomb',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 9,
        name: 'Donut',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      },
      {
        id: 10,
        name: 'KitKat',
        contact: "9923551315",
        service: "Hair Cutting",
        done_by: "Shekhar Shirke",
        amount: "300",
        payment_mode: "Cash",
      }
    ]


    const testAPICall = () => {
      api
        .get('/api/admin/')
        .then((response) => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
    testAPICall();


    return {
      scroll,
      scroll_left,
      scroll_right,
    };
  }
});
</script>

<style scoped>
  .issue_images_scroll {
    display: flex;
    overflow-y: auto;
  }
  .issue_images_scroll::-webkit-scrollbar {
    display: none;
  }

  .arrow_div_positions {
    position: absolute;
    top: 42%;
    transform: translateX(-42%);
    z-index: 1;
  }
</style>