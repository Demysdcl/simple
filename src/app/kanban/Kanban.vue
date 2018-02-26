<script>
import HttpService from '../../http/HttpService'
import draggrable from 'vuedraggable'
import Card from '../../components/Card'
import { QCard, QBtn } from 'quasar'
export default {
  components: {
    QCard, QBtn, Card, draggrable
  },

  data () {
    return {
      colOne: [],
      colTwo: [],
      colThree: [],
      options: {
        group: 'task'
      }
    }
  },

  created () {
    this.service = new HttpService('list')
    this.getList()
  },

  methods: {
    getList () {
      this.service.findAll().then(res => {
        this.colOne = res.todoList
        this.colTwo = res.doingList
        this.colThree = res.doneList
      })
    }
  }
}
</script>

<template>
  <div>
    <left>
      <q-btn round color="secondary" icon="create" label="On Left"/>
    </left>
    <div class="row" >
      <card title="TODO" class="col" color="negative">
        <draggrable  :options="options" min-height="0">
          <q-card v-for="task in colOne" color="dark" :key="task.id">
              <h6>{{ task.title }} </h6>
              {{ task.description }}
          </q-card>
        </draggrable>
      </card>

      <card title="DOING" class="col" color="warning">
        <draggrable :options="options" min-height="0">
          <q-card v-for="task in colTwo" color="dark" :key="task.id">
              <h6>{{ task.title }} </h6>
              {{ task.description }}
          </q-card>
        </draggrable>
      </card>

      <card title="DONE" class="col" color="positive">
        <draggrable :options="options" min-height="0">
          <q-card v-for="task in colThree" color="dark" :key="task.id">
              <h6>{{ task.title }} </h6>
              {{ task.description }}
          </q-card>
        </draggrable>
      </card>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
left 
  float right
  margin 20px
</style>
