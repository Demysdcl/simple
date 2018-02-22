import { http } from './index'
import { Notify } from 'quasar'

export class HttpService {
  constructor (url) {
    this.url = url
  }

  findAll () {
    return http.get(this.url).then(res => res.data, error => {
      console.log(error)
      this.createNotification('localizar as informações', 1)
    })
  }

  findOne (id) {
    return http.get(`${this.url} / ${id}`).then(res => res.data, error => {
      console.error(error)
      this.createNotification(`encontrar pela ID: ${id}`, 1)
    })
  }

  save (entity) {
    return http.post(this.url, entity).then(res => {
      this.createNotification('Salvo com sucesso', 0)
      return res.data
    }, error => {
      console.error(error)
      this.createNotification('salva as informações', 1)
    })
  }

  createNotification (message, index) {
    Notify.create({
      message: `Não foi possível ${message}`,
      ...this.getConfig(index)
    })
  }
  getConfig (index) {
    let alerts = [{
      icon: 'tag_faces',
      color: 'secondary'
    }, {
      icon: 'report_problem',
      color: 'negative'
    }]
    return alerts[index]
  }
}
