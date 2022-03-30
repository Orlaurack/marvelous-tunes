<template>
  <div class="hello">
    <template v-if="user">
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
    </template>
  </div>
</template>

<script>
//import request from 'request'
//import axios from 'axios'

export default {
  name: 'MainVue',
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
  },
  created() { 
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
