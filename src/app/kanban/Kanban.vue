<script>
import HttpService from '../../http/HttpService'
import draggrable from 'vuedraggable'
import Card from '../../components/Card'
import { QCard, QCardMain, QCardActions, QCardSeparator, QBtn } from 'quasar'
export default {
  components: {
    QCard, QCardMain, QCardActions, QCardSeparator, QBtn, Card, draggrable
  },
  data: () => ({
    colOne: [],
    colTwo: [],
    colThree: [],
    options: {
      group: 'task'
    }
  }),

  created () {
    this.service = new HttpService('tasks')
    this.getList()
  },

  methods: {
    getList () {
      this.service.find('list').then(res => {
        this.colOne = res.todoList
        this.colTwo = res.doingList
        this.colThree = res.doneList
      })
    },

    remove (task) {
      this.service.delete(task.id)
        .then(res => this.getList())
    },

    changeStatus (item, status) {
      if (item.added) {
        let task = item.added.element
        task.status = status
        this.service.update(task.id, task)
      }
    }
  }
}
</script>

<template>
  <div>
    <q-btn class="right" round 
      color="secondary" icon="create" 
      @click="$router.push('/kanban/form')"/>
    
    <div class="row">
      <card title="TODO" class="col" color="negative">
        <draggrable  :options="options" min-height="0" @change="changeStatus($event, 'TODO')" :list="colOne">
          <q-card v-for="task in colOne" color="dark" :key="task.id">
            <q-card-main>
              <h6>{{ task.title }} </h6>
              {{ task.description }}
            </q-card-main>  
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="primary" flat @click="$router.push(`/kanban/form/${task.id}`)">Editar</q-btn>
              <q-btn color="negative" flat @click="remove(task)">Excluir</q-btn>
            </q-card-actions>
          </q-card>
        </draggrable>
      </card>

      <card title="DOING" class="col" color="warning">
        <draggrable :options="options" min-height="0" @change="changeStatus($event, 'DOING')" :list="colTwo">
          <q-card v-for="task in colTwo" color="dark" :key="task.id">
            <q-card-main>
              <h6>{{ task.title }} </h6>
              {{ task.description }}
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="primary" flat @click="$router.push(`/kanban/form/${task.id}`)">Editar</q-btn>
              <q-btn color="negative" flat @click="remove(task)">Excluir</q-btn>
            </q-card-actions>
          </q-card>
        </draggrable>
      </card>

      <card title="DONE" class="col" color="positive">
        <draggrable :options="options" min-height="0" @change="changeStatus($event, 'DONE')" :list="colThree">
          <q-card v-for="task in colThree" color="dark" :key="task.id">
            <q-card-main>
              <h6>{{ task.title }} </h6>
              {{ task.description }}
            </q-card-main>  
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="primary" flat @click="$router.push(`/kanban/form/${task.id}`)">Editar</q-btn>
              <q-btn color="negative" flat @click="remove(task)">Excluir</q-btn>
            </q-card-actions>
          </q-card>
        </draggrable>
      </card>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.right 
  float right 
  margin 20px
</style>
