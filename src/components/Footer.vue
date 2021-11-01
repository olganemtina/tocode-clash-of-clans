<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="elem in elems" :key="elem.alias">
            <router-link :to="elem.url" class="navbar-link">{{
              elem.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { links } from "@/_config.js";
export default {
  data() {
    return {
      elems: links,
    };
  },
};
</script>
