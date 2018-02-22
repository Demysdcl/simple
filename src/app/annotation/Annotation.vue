<script>
import { QCard, QCardMain, QCardTitle, QCardSeparator } from 'quasar'
export default {
  data () {
    return {
      annotations: [
        {title: 'Anotação 1', content: ['Conteúdo 1']},
        {title: 'Anotação 2', content: ['Conteúdo 2']},
        {title: 'Anotação 3', content: ['Conteúdo 3']},
        {title: 'Anotação 4', content: ['Conteúdo 4', 'Conteúdo X']},
        {title: 'Anotação 1', content: ['Conteúdo 2', 'Conteúdo 3', 'Conteúdo 4', 'Conteúdo 7']}
      ]
    }
  },
  components: {
    QCard, QCardMain, QCardTitle, QCardSeparator
  }
}
</script>

<template>
<div>
  <q-card v-for="annotation in annotations" :key="annotations.indexOf(annotation)">
    <q-card-title style="title-main" >
      {{ annotation.title }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <p v-for=" text in annotation.content" :key="annotation.content.indexOf(text)">
          {{ text }}
      </p>
    </q-card-main>
  </q-card>
</div>
</template>

<style lang="stylus" scoped>
@import '~variables'
.title-main
  background-color primary  
</style>