<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-logo">{{ title }}</router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="elem in elems" :key="elem.alias">
            <router-link :to="elem.url" class="navbar-link">{{
              elem.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { links, title } from "@/_config.js"
export default {
  data() {
    return {
      elems: links,
      title: title,
    }
  },
}
</script>
