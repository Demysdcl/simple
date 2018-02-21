<script>
import { QList, QListHeader, QSideLink, QItemSide, QItemMain } from 'quasar'
import routes from '../routes'

export default {
  data () {
    return {
      routes
    }
  },
  components: {
    QList, QListHeader, QSideLink, QItemSide, QItemMain
  },
  methods: {
    clicked (title) {
      this.$emit('clicked', title)
      alert(title)
    }
  }
}
</script>

<template>
  <div>
    <q-list no-border link inset-separator>
      <q-list-header>Menu</q-list-header>
      <q-side-link v-for="route in routes" item :to="route.path" >
        <q-item-side :icon="route.icon" />
        <q-item-main :label="route.title" @click="clicked(route.title)" :sublabel="route.subtitle" />
      </q-side-link>
    </q-list>
  </div>
</template>

<style lang="css">
</style>
