<template>
    <div class="usuarios">
        <h1>Agregar usuario</h1>
        <div class="form">
            <div>
                <input type="text" name="nombreUsuario" placeholder="USUARIO" v-model="nombreUsuario">
            </div>
            <div>
                <button class="app_usuario_btn" @click="agregarUsuario">Agregar</button>
            </div>
        </div>
    </div>
</template>

<script>
import UsuariosService from '@/services/UsuariosService'
export default {
  name: 'NuevoUsuario',
  data () {
    return {
      nombreUsuario: ''
    }
  },
  methods: {
    async agregarUsuario () {
      await UsuariosService.agregarUsuario({
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
.app_post_btn {
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
