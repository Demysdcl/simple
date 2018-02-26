<script>
import Card from '../../components/Card'
export default {
  data () {
    return {
      annotations: [
        {id: 0, title: 'Anotação 1', content: []},
        {id: 1, title: 'Anotação 2', content: ['Conteúdo 2']},
        {id: 2, title: 'Anotação 3', content: ['Conteúdo 3']},
        {id: 3, title: 'Anotação 4', content: ['Conteúdo 4', 'Conteúdo X']},
        {id: 4, title: 'Anotação 1', content: ['Conteúdo 2', 'Conteúdo 3', 'Conteúdo 4', 'Conteúdo 7']}
      ]
    }
  },

  components: {
    Card
  }
}
</script>

<template>
<div>
  <card :title="annotation.title" v-for="annotation in annotations" :key="annotation.id">
    <p v-for=" text in annotation.content" :key="annotation.content.indexOf(text)">
        {{ text }}
    </p>
  </card>
</div>
</template>

<style lang="stylus" scoped>
@import '~variables'
.title-main
  background-color primary  
</style>