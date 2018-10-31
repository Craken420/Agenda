import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Usuarios from '@/components/Usuarios'
import NuevoUsuario from '@/components/NuevoUsuario'
import EditarUsuario from '@/components/EditarUsuario'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    },
    {
      path: '/usuarios/nuevo',
      name: 'NuevoUsuario',
      component: NuevoUsuario
    },
    {
      path: '/usuarios/:id',
      name: 'EditarUsuario',
      component: EditarUsuario
    }
  ]
})
