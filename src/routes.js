import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import ItemPage from './pages/_itemAlias'
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
      path: '/:itemAlias',
      name: 'itemAlias',
      component: ItemPage
    },
    {
      //path: "/:CatchAll(.*)",
      path: "/404",
      component: NotFoundPage,
      name: "404"
    }
  ],
});

export default routes;


