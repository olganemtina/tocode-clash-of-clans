<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.desc" />
      <h1>{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <CardFooter :info="item.info" />
      <div>
        <router-link to="/" class="btn btnPrimary">back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Items from "@/seeders/items"
import CardFooter from "@/components/UI/CardFooter"

export default {
  components: {
    CardFooter,
  },
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    let item = Items.find((el) => el.alias === alias)
    /* eslint-disable */
    debugger
    if (item) {
      this.item = item
    } else {
      this.$router.push("/404")
    }
  },
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    border-radius: 14px;
    margin: 20px;
  }
}
</style>
