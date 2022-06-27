import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/login/Login.vue'
import Signup from '../views/register/Signup.vue'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Rpassword from '../views/recover/Contrasena.vue'
import Activate from '../views/recover/Activate.vue'
import User from '../views/user/User.vue'
import AnimalReg from "../views/animalReg/AnimalReg.vue"
import Adopta from '../views/adopta/Adopta.vue'
import Info_mascota from '../views/adopta/InfoMascota.vue'
import userPets from '../views/user/UserPets.vue'
import ConsultaApli from '../views/apliAdopcion/ConsultaApli.vue' 
import ApliAdopcion from '../views/apliAdopcion/ApliAdopcion.vue' 
import store from '@/store/index';

const routes = [
  {
    path: '/activate/:token',
    name: 'Activate',
    component: Activate
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
        requiresAuth: true
    }
  },
  {

    path: '/password/:id',
    name: 'Password',
    component: Rpassword
  },
  {
    path: '/animalreg',
    name: 'AnimalReg',
    component: AnimalReg,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/adopta/:idPage',
    name: 'Adopta',
    component: Adopta
  },
  {
    path: '/info-mascota/:idPet',
    name: 'Info_mascota',
    component: Info_mascota

  },
  {
    path: '/user/userPet',
    name: 'userPet',
    component: userPets,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/apply/:idPet',
    name: 'Aplicar_Adopcion',
    component: ApliAdopcion
  },
  {
    path: '/profile/consultaapli',
    name: 'ConsultaApli',
    component: ConsultaApli,
    meta: {
      requiresAuth: true
    }
  },
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,


  scrollBehavior() {
    const id = 'app';
    const yOffset = -100; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
    
  }
})



router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
    
})

export default router

