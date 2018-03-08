export default {
  welcome: state => {
    return `Bem vindo ${state.user.name}`
  },

  isLogged: state => {
    return state.token !== null
  }

}
