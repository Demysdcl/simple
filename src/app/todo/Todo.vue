<script>
import HttpService from '../../http/HttpService'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.service = new HttpService('tasks', this.$q)
    this.service.findAll(res => {
      this.list = res.tasks
      console.log(this.list)
    })
  }
}
</script>

<template>
    <div>
        
    </div>
</template>

<style scoped>

</style>