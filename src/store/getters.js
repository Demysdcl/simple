export default {
  welcome: state => {
    return `Bem vindo ${state.user.username}`
  },

  isLogged: state => {
    return state.token !== null
  }

}
