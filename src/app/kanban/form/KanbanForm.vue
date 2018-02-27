<script>
import { QCard, QBtn, QInput } from 'quasar'
import HttpService from '../../../http/HttpService'
export default {
  components: { QCard, QBtn, QInput },
  data () {
    return {
      task: {
        title: '',
        description: '',
        status: 'TODO'
      }
    }
  },
  created () {
    this.service = new HttpService('tasks')
  },
  methods: {
    save () {
      this.service.save(this.task)
      this.task.title = ''
      this.task.description = ''
    }
  }
}
</script>

<template>
  <div class="main">
    <q-card v-model="opened" style="height:250px; text-align:center">
        <h5>Adicionar nova task</h5>
        <q-input class="main" v-model="task.title" float-label="Título" placeholder="Informe o título" />
        <q-input class="main" v-model="task.description" float-label="Descrição" placeholder="Informe a descrição" />
    </q-card>
    <q-btn @click="$router.push('/kanban')" color="secondary">Voltar</q-btn>
    <q-btn @click="save()" color="primary">Salvar</q-btn>
  </div>
</template>

<style lang="stylus" scoped>
.main
  margin 40px
</style>
