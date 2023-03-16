<template>
  <NavBar />
  <UnderlineNav />
  <div class="profile-repo">
    <!-- <ProfileLeft /> -->
    <RepoRight />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import UnderlineNav from '../components/UnderlineNav.vue'
// import ProfileLeft from './components/ProfileLeft.vue'
import RepoRight from '../components/RepoRight.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    UnderlineNav,
    RepoRight
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Bai+Jamjuree:wght@300&family=Inter:wght@300&family=Josefin+Sans:wght@300&family=Kumbh+Sans:wght@400;700&family=Oxanium&family=Poppins:wght@300&family=Source+Sans+Pro&family=Syne:wght@700&display=swap');

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
}

.profile-repo{
  display: flex;
  margin-right: 70px;
  margin-left: 70px;
  gap: 30px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
