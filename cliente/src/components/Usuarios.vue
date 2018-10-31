
<template>
  <div class="usuarios">
      <h1>Usuarios</h1>
      <div v-if="usuarios.length > 0" class="table-wrap">
        <div>
          <router-link v-bind:to="{ name: 'NuevoUsuario' }" class="">Agregar Usuario</router-link>
          <br />
          <br />
        </div>
        <table>
          <tr>
            <td width="550">Nombre usuario</td>
            <td width="550">Fecha de ingreso</td>
            <td width="100" align="center">Accion</td>
          </tr>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.nombreUsuario }}</td>
             <td>{{ usuario.fechaCreacion}}</td>
            <td align="center">
              <router-link v-bind:to="{name: 'EditarUsuario', params: { id: usuario._id } }">Editar</router-link>
              <a href="#" @click="eliminarUsuario(usuario._id)">Eliminar</a>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
         No ahi usuarios, agrega uno <br /> <br />
         <router-link v-bind:to="{ name: 'NuevoUsuario'}" class="add_usuario_link">Agregar usuario</router-link>
      </div>
  </div>
</template>

<script>
import UsuariosService from '@/services/UsuariosService'

export default {
  name: 'usuarios',
  data () {
    return {
      usuarios: []
    }
  },
  mounted () {
    this.getUsuarios()
  },
  methods: {
    async getUsuarios () {
      const respuesta = await UsuariosService.fetchUsuarios()
      this.usuarios = respuesta.data
    },
    async eliminarUsuario (id) {
      await UsuariosService.eliminarUsuario(id)
      this.$router.push({ name: 'Usuarios' })
      this.getUsuarios()
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_usuario_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
