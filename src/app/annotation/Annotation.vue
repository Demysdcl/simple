<script>
import Card from '../../components/Card'
export default {
  data () {
    return {
      annotations: [
        {title: 'Anotação 1', content: []},
        {title: 'Anotação 2', content: ['Conteúdo 2']},
        {title: 'Anotação 3', content: ['Conteúdo 3']},
        {title: 'Anotação 4', content: ['Conteúdo 4', 'Conteúdo X']},
        {title: 'Anotação 1', content: ['Conteúdo 2', 'Conteúdo 3', 'Conteúdo 4', 'Conteúdo 7']}
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
  <card :title="annotation.title" v-for="annotation in annotations" :key="annotations.indexOf(annotation)">
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