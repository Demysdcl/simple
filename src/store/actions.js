export default {
  changeUser (context, payload) {
    context.user = payload
  },

  changeToken (context, payload) {
    context.token = payload
  }

}
