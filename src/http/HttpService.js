import { http } from './index'
import { Dialog } from 'quasar'
class HttpService {
  constructor (url) {
    this.url = url
  }

  findAll () {
    return http.get(this.url)
      .then(res => res.data)
      .catch(error => {
        console.log(error)
        this.dialog('Erro', 'Não foi possível carregar as informações')
      })
  }

  findOne (id) {
    return http.get(`${this.url}/${id}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error)
        this.dialog('Erro', 'Não foi possível realizar a consulta', 'negative')
      })
  }

  save (entity) {
    return http.post(this.url, entity)
      .then(res => {
        this.getMessage(entity.id)
        return res.data
      }).catch(error => {
        console.log(error)
        this.dialog('Erro', 'Não foi possível salvar a informação', 'negative')
      })
  }

  getMessage (id) {
    if (id) {
      this.dialog('Editado', 'Informações editados com sucesso', 'primary')
    }
    else {
      this.dialog('Salvo', 'Informações salvas com sucesso', 'primary')
    }
  }

  delete (id) {
    return http.delete(`${this.url}/${id}`)
      .then(res => {
        this.dialog('Exclusão', 'Informações excluídas com sucesso', 'primary')
        return res.data
      }).catch(error => {
        console.log(error)
        this.dialog('Erro', 'Não foi possível deletar a informação', 'negative')
      })
  }

  dialog (title, message, color) {
    Dialog.create({
      title, message, color
    })
  }
}

export default HttpService
