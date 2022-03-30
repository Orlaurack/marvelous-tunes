<template>
  <div class="hello">
    <h1>Hi there, {{ this.user.display_name }}</h1>
    <img :src="this.user.images[0].url" alt="profile_picture" class="profile_pic">
    <p>Email address: {{ this.user.email }}</p>
    <p>
      <a :href="this.user.external_urls.spotify">Link to your profile</a>
    </p>
    <p>Number of followers: {{ this.user.followers.total }}</p>
    <p>
      <button v-on:click="logOut()" class="btn btn-primary">Log out</button>
    </p>
  </div>
</template>

<script>
//import request from 'request'
//import axios from 'axios'

export default {
  name: 'LoggedVue',
  props: {
    msg: String
  },
  data() {
    return {
      frameSrc: '',
      token: '',
      refreshToken: ''
    }
  },
  methods: {
  },
  created() { 
    console.log('logged')
   
    // const accessToken = 'BQC993w1GX_YK5kOvQi17Oywaw6pUi4NXSotxWC4d6CYZyDxGjN79IzOSpYmib0qCZPrM3Jj7NQ9r-u7mc3N1JPD9hO83Rs-a8WhBXvJAq0FMEridZ5Yc4OhNJ69t5_gI4uUqIaFdRhGK6SZM_1ZZtnXjA547UvFDZXzxuT7OEoBZ319bYw'
    // fetch('https://api.spotify.com/v1/me', {
    //   headers: {
    //     'Authorization': 'Bearer ' + accessToken
    //   }

    // }).then((response) => {
    //   this.$store.commit('mutateUser', response.data);
    //   console.log('Response from server: ');
    //   console.log(this.$store.state.user);
    // }).catch((error) =>{
    //   console.log(error)
    // })
  },
}
</script>

<style scoped>
</style>
