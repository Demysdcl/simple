<script>
import { QCard, QCardMain, QCardTitle, QCardActions, QCardSeparator, QBtn, QInput } from 'quasar'
import HttpService from '../../../http/HttpService'
export default {
  components: { QCard, QCardTitle, QCardMain, QCardActions, QCardSeparator, QBtn, QInput },
  data () {
    return {
      task: {
        title: '',
        description: '',
        status: 'TODO'
      },
      id: null
    }
  },
  created () {
    this.service = new HttpService('tasks')
    this.id = this.$route.params.id
    if (this.id) {
      this.service.findOne(this.id)
        .then(res => {
          this.task = res
        })
    }
  },
  methods: {
    save () {
      this.service.save(this.task)
        .then(res => {
          this.task.title = ''
          this.task.description = ''
        })
    },
    update () {
      this.service.update(this.id, this.task)
    }
  }
}
</script>

<template>
  <main>
    <q-card>
      <q-card-title>
        {{ id ? 'Editar' : 'Adicionar nova ' }} task
      </q-card-title>
      <q-card-separator/>
      <q-card-main>
        <q-input v-model="task.title" float-label="Título" placeholder="Informe o título" />
        <q-input v-model="task.description" float-label="Descrição" placeholder="Informe a descrição" />
      </q-card-main>
      <q-card-separator/>
      <q-card-actions>
        <q-btn @click="$router.push('/kanban')" color="secondary">Voltar</q-btn>
        <q-btn @click="update()" v-if="id" color="primary">Atualizar</q-btn>
        <q-btn @click="save()" v-else color="primary">Salvar</q-btn>
        
      </q-card-actions>
    </q-card>
  </main>
</template>

<style lang="stylus" scoped>
main
  margin 40px
</style>
