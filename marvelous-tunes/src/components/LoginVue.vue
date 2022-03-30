<template>
  <div class="hello">
    <a @click="loginSpotify" :href="frameSrc" class="btn btn-primary">Log in with Spotify</a><br>
  </div>
</template>

<script>

export default {
  name: 'LoginVue',
  props: {
  },
  data() {
    return {
      frameSrc: '',
      token: '',
      refreshToken: ''
    }
  },
  methods: {
    loginSpotify(){
      console.log('load iframe')
    }
  },
  created() { 
    const query_params = new URLSearchParams({
      client_id: '947112f30fdf466e9a07dbace3003d58',
      response_type: 'code',
      redirect_uri: 'http://localhost:8080/callback',
      scope: 'user-read-private user-read-email',
      shot_dialog: true
    }).toString()
    const url = 'https://accounts.spotify.com/authorize'

    this.frameSrc = `${url}?${query_params}`
  },
}
</script>

<style scoped>
</style>
