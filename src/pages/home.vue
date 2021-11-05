<template>
  <div class="mb-body">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card
          :title="item.title"
          :name="`${item.lvl} lvl`"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{ item.descr }}
          </template>

          <template v-slot:footer>
            <CardFooter :info="item.info" />
          </template>
        </Card>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import Card from "@/components/UI/Card"
import CardFooter from "@/components/UI/CardFooter"
import Items from "@/seeders/items"
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

export default {
  components: {
    Card,
    CardFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: Items,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        800: {
          itemsToShow: 2,
        },
        1100: {
          itemsToShow: 3,
        },
      },
    }
  },
  methods: {},
}
</script>
