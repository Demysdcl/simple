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
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
      </ul>

  </div>
</template>

<style scoped>

</style>