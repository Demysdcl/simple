import { http } from './index'

class HttpService {
  constructor (url) {
    this.url = url
  }

  findAll () {
    return http.get(this.url).then(res => res.data, error => {
      console.log(error)
      return {
        message: 'Não foi possível localizar'
      }
    })
  }

  findOne (id) {
    return http.get(`${this.url} / ${id}`).then(res => res.data, error => {
      console.log(error)
      return `Não foi possível localizar a informação com ID: ${id}`
    })
  }

  save (entity) {
    return http.post(this.url, entity).then(res => {
      return {
        list: res.data,
        msg: 'Salvo com sucesso'
      }
    }, error => {
      console.log(error)
      return 'Não foi possível salvar'
    })
  }

  delete (id) {
    return http.delete(`${this.url} / ${id}`).then(res => res, error => {
      console.log(error)
      return `Não foi possível deletar: ${id}`
    })
  }
}

export default HttpService
