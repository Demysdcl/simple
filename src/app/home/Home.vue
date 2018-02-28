<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['welcome'])
  }
}
</script>

<template>
  <main class="hello">
    <h5>Welcome to Vue course</h5>
    <div class="content">
      <img class="image" src="statics/logo.png" />
      <img class="image" src="statics/quasar-logo.png" />
    </div>
    <ul>
      <li><a href="https://br.vuejs.org/" target="_blank" rel="noopener">Vue Doc</a></li>
      <li><a href="http://quasar-framework.org/" target="_blank" rel="noopener">Quasar Doc</a></li>
      <li><a href="https://br.vuejs.org/v2/guide/unit-testing.html" target="_blank" rel="noopener">
        Testing</a>
      </li>
      <li><a href="https://www.youtube.com/channel/UCTluPqMkm90zyw6mCde561A"
        target="_blank" rel="noopener">Codecasts</a></li>
    </ul>
    <p>{{ welcome }}</p>
  </main>
</template>

<style lang="stylus" scoped>
@import '~variables'
main
  text-align center
.content
  height 180px
  margin-top 50px
  margin-bottom 50px
.image
  height 100%
.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
