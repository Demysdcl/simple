<script>
import { QCard, QBtn, QInput } from 'quasar'
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
  methods: {
  }
}
</script>

<template>
  <q-card v-model="opened" >
    <q-input v-model="task.title" float-label="Título" placeholder="Gigi" />
    <q-input v-model="task.description" float-label="Descrição" placeholder="Gigi" />
    <q-btn>Salvar</q-btn>
  </q-card>
</template>