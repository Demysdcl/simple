export default {

  changeUser (context, payload) {
    context.commit('setUser', payload)
  },

  changeToken (context, payload) {
    context.commit('setToken', payload)
  }

}
