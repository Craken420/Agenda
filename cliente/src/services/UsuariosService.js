import Api from '@/services/Api'

export default {
  fetchUsuarios () {
    return Api().get('usuarios')
  },

  agregarUsuario (params) {
    return Api().post('usuarios', params)
  },

  actualizarUsuario (params) {
    return Api().put('usuarios/' + params.id, params)
  },

  getUsuario (params) {
    return Api().get('usuarios/' + params.id)
  },

  eliminarUsuario (id) {
    return Api().delete('usuarios/' + id)
  }
}
