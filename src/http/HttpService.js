import { http } from './index'
import { Dialog } from 'quasar'

class HttpService {
  constructor (url) {
    this.url = url
  }

  findAll () {
    return http.get(this.url).then(res => res.data, error => {
      console.log(error)
      this.dialog('Erro', 'Não foi possível carregar as informações')
    })
  }

  findOne (id) {
    return http.get(`${this.url} / ${id}`).then(res => res.data, error => {
      console.log(error)
      this.dialog('Erro', 'Não foi possível realizar a consulta')
    })
  }

  save (entity) {
    return http.post(this.url, entity).then(res => {
      this.dialog('Salvar', 'Salvo com sucesso')
      return res.data
    }, error => {
      console.log(error)
      this.dialog('Erro', 'Não foi possível salvar as informações')
    })
  }

  delete (id) {
    return http.delete(`${this.url} / ${id}`)
      .then(res => this.dialog('Excluir', 'Excluído com sucesso'),
        error => {
          console.log(error)
          this.dialog('Erro', 'Erro ao deletar a informação')
        })
  }

  dialog (title, message) {
    Dialog.create({
      title, message
    })
  }
}

export default HttpService
