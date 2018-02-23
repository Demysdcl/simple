<script>
import HttpService from '../../http/HttpService'
export default {
  data () {
    return {
      options: {
        // dropzoneSelector: 'ul',
        // draggableSelector: 'li',
        // excludeOlderBrowsers: true,
        // multipleDropzonesItemsDraggingEnabled: true,
        // onDrop(event) {},
        // onDragstart(event) {},
        // onDragend(event) {}
      },
      colOne: [],
      colTwo: []
    }
  },
  created () {
    this.service = new HttpService('tasks')
    this.service.findAll().then(res => {
      this.colOne = res._embedded.tasks
      console.log(this.colOne)
    })
  },
  components: {
  }
}
</script>

<template>
  <div v-drag-and-drop:options="options">

      <ul>
        <li v-for="col in colOne"> {{ col.title }}</li>
      </ul>
      <ul>
          <li v-for="col in colTwo">{{ col.title }}</li>
      </ul>

  </div>
</template>

<style scoped>

</style>