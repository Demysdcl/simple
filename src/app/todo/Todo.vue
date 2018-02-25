<script>
import HttpService from '../../http/HttpService'
import Card from '../../components/Card'
import { QCard } from 'quasar'
export default {
  data () {
    return {
      options: {
        dropzoneSelector: 'card',
        draggableSelector: 'q-card'
        // excludeOlderBrowsers: true,
        // multipleDropzonesItemsDraggingEnabled: true,
        // onDrop(event) {},
        // onDragstart(event) {},
        // onDragend(event) {}
      },
      colOne: [],
      colTwo: [],
      colThree: []
    }
  },

  created () {
    this.service = new HttpService('list')
    this.service.findAll().then(res => {
      this.colOne = res.todoList
      this.colTwo = res.doingList
      this.colThree = res.doneList
    })
  },
  components: {
    QCard, Card
  }
}
</script>

<template>
  <div class="row" v-drag-and-drop:options="options">
    <card title="TODO" class="col" color="negative">
      <q-card v-for="task in colOne" :key="task.id" >
          <h5>{{ task.title }} </h5>
          {{ task.description }}
      </q-card>
    </card>

    <card title="DOING" class="col" color="warning">
      <q-card v-for="task in colTwo" :key="task.id" >
          <h5>{{ task.title }} </h5>
          {{ task.description }}
      </q-card>
    </card>

    <card title="DONE" class="col" color="secondary">
     <q-card v-for="task in colThree" :key="task.id" >
          <h5>{{ task.title }} </h5>
          {{ task.description }}
      </q-card>
    </card>
  </div>
</template>

<style scoped>
row {
  width: 100%;
}
</style>