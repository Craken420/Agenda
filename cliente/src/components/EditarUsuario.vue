<template>
  <div class="usuarios">
      <h1>Editar usuario</h1>
        <div class="form">
          <input type="text" name="nombreUsuario" placeholder="USUARIO" v-model="nombreUsuario">
        </div>
        <div>
          <button class="app_usuario_btn" @click="actualizarUsuario">Actualizar</button>
        </div>
  </div>
</template>

<script>
import UsuariosService from '@/services/UsuariosService'
export default {
  name: 'EditarUsuario',
  data () {
    return {
      nombreUsuario: ''
    }
  },
  mounted () {
    this.getUsuario()
  },
  methods: {
    async getUsuario () {
      const response = await UsuariosService.getUsuario({
        id: this.$route.params.id
      })
      this.nombreUsuario = response.data.nombreUsuario
    },
    async actualizarUsuario () {
      await UsuariosService.actualizarUsuario({
        id: this.$route.params.id,
        nombreUsuario: this.nombreUsuario
      })
      this.$router.push({ name: 'Usuarios' })
    }
  }
}
</script>

<style type="text/css">
.form input {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_usuario_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
