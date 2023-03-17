<template>
  <NavBar />
  <div className="desktop">
    <!-- <UnderlineNav /> -->
   <div class="profile-repo">
    <ProfileLeft />
    <RepoRight />
   </div>
  </div>
  <div className="mobile">
    <ProfileLeft />
    <UnderlineNav />
    <RepoRight />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import UnderlineNav from '../components/UnderlineNav.vue'
import ProfileLeft from '../components/ProfileLeft.vue'
import RepoRight from '../components/RepoRight.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    UnderlineNav,
    ProfileLeft,
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


@media (max-width: 1003px) and (min-width: 957px) {
.profile-repo{
  margin-right: 40px;
  margin-left: 40px;
}
}

@media (max-width: 958px) and (min-width: 768px) {
.profile-repo{
  margin-right: 20px;
  margin-left: 20px;
}
}

@media only screen and (min-width: 767px) {
.mobile{
  display: none;
}
}

@media only screen and (max-width: 766px) {
 .desktop{
  display: none
 }
 .mobile{
  padding-right: 20px;
  padding-left: 20px;
 }
}


</style>
