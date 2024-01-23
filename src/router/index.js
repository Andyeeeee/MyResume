// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home"*/'@/views/Home.vue'),
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/aboutme',
    component: () => import(/* webpackChunkName: "aboutme"*/'@/views/AboutMe.vue'),
    meta: {
      title: '關於我'
    }
  },
  {
    path: '/myproduct',
    component: () => import(/* webpackChunkName: "myproduct"*/'@/views/MyProduct.vue'),
    meta: {
      title: '我的作品'
    }
  },
  {
    path: '/myskill',
    component: () => import(/* webpackChunkName: "myskill"*/'@/views/MySkill.vue'),
    meta: {
      title: '我的技能'
    }
  },
  {
    path: '/learningprocess',
    component: () => import(/* webpackChunkName: "learningprocess"*/'@/views/LearningProcess.vue'),
    meta: {
      title: '學習歷程'
    }
  },
  {
    path: '/myexperience',
    component: () => import(/* webpackChunkName: "myexperience"*/'@/views/MyExperience.vue'),
    meta: {
      title: '我的經歷'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
