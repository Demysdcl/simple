import { isEmpty } from 'lodash'

export default {
  welcome: state => {
    return `Bem vindo ${state.user.username}`
  },

  isLogged: ({ token }) => !isEmpty(token)

}
