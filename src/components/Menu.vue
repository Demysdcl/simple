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
    }
  }
}
</script>

<template>
  <div>  
      <q-list no-border :key="route.path" link inset-separator v-for="route in routes" v-if="route.children">
        <q-list-header>Menu</q-list-header>
        <q-side-link v-for="child in route.children" v-if="child.title" item :to="child.path" :key="child.title">
          <q-item-side :icon="route.icon" />
          <q-item-main :label="child.title" @click="clicked(child.title)" :sublabel="child.subtitle" />
        </q-side-link>
      </q-list>
    
  </div>
</template>