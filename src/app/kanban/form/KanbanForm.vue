<script>
import { QCard, QCardMain, QCardTitle, QCardActions, QCardSeparator, QBtn, QInput } from 'quasar'
import HttpService from '../../../http/HttpService'
export default {
  components: { QCard, QCardTitle, QCardMain, QCardActions, QCardSeparator, QBtn, QInput },
  data: () => ({
    task: {
      title: '',
      description: '',
      status: 'TODO'
    },
    id: null
  }),
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
      this.validate(call => {
        this.service.save(this.task)
          .then(res => {
            this.task.title = ''
            this.task.description = ''
          })
      })
    },

    update () {
      this.validate(call => {
        this.service.update(this.id, this.task)
          .then(success => this.service.dialog('Atualizado', 'Informações atualizadas com sucesso', 'primary'))
      })
    },

    validate (call) {
      this.$validator.validateAll().then(success => {
        if (success) {
          call()
        }
      })
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

        <q-input name="title" v-validate data-vv-rules="required" v-model.lazy="task.title"
          float-label="Título" placeholder="Informe o título" />
        <span v-show="errors.has('title')">{{ errors.first('title') }}</span>

        <q-input name="description" data-vv-rules="required" v-validate v-model.lazy="task.description" 
          float-label="Descrição" placeholder="Informe a descrição" />
        <span v-show="errors.has('description')">{{ errors.first('description') }}</span>

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
