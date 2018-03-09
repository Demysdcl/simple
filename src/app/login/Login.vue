<script>
import { QCard, QCardMain, QCardTitle, QCardActions, QCardSeparator, QBtn, QInput } from 'quasar'
import { mapActions } from 'vuex'
export default {
  components: { QCard, QCardTitle, QCardMain, QCardActions, QCardSeparator, QBtn, QInput },
  data: () => ({
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['changeToken', 'changeUser']),
    signin () {
      this.changeUser(this.user)
      this.changeToken('ffdkkfafa.ldfjdfjadfladfdasjf.fjdfj')
      alert('Clicked')
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col"></div>
    <main class="col" reverse>
      <q-card color="light">

        <q-card-title style="color:black">
          Login
        </q-card-title>

        <q-card-separator/>

        <q-card-main>
          <q-input name="username" v-validate data-vv-rules="required" v-model.lazy="user.username"
            float-label="Username" placeholder="Informe o username" />
          <span style="color:black" v-show="errors.has('username')">{{ errors.first('username') }}</span>

          <q-input name="senha" data-vv-rules="required" v-validate v-model.lazy="user.password" 
            float-label="Senha" placeholder="Informe a senha" />
          <span style="color:black" v-show="errors.has('senha')">{{ errors.first('senha') }}</span>              
        </q-card-main>

        <q-card-separator/>

        <q-card-actions align="center">
          <q-btn  @click="signin()" color="primary">Login</q-btn>
        </q-card-actions>

      </q-card>
    </main>
    <div class="col"></div>
  </div>
</template>

<style scoped lang="stylus">
main
  color black 
  margin 50px
</style>
