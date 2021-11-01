import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import { createRouter, createWebHashHistory } from 'vue-router'; 'vue-router'

const routeHistory = createWebHashHistory();

const routes = createRouter({
  history: routeHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
      name:"home"
    },
    {
      path: "/about",
      component: AboutPage,
      name: "about"
    },
    {
      path: "/:CatchAll(.*)",
      component: NotFoundPage,
      name: "404"
    }
  ],
});

export default routes;


