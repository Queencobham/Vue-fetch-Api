<template>
<div class="main" v-if="!isLoading">
  <router-link to="/" class="repo-link">Go Back</router-link>
  <div class="repo-heading">
    <h2>{{ repo.name }} Details</h2>
  </div>
  <div class="repo-details">
    <div class="repo-description">
    <p><span>Description:</span> {{ repo.description==null?"None" : (repo.description) }}</p>
   </div>
   <div class="repo-others">
    <div class="details-flex">
      <p>Created at:</p> 
      <span>
        {{ new Date(repo.created_at).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
        })}}
      </span>
    </div>
    <div class="details-flex">
      <p>Updated at:</p> 
      <span>
        {{ new Date(repo.updated_at).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
        })}}
      </span>
    </div>
    <div class="details-flex">
      <p>Pushed at:</p> 
      <span>
        {{ new Date(repo.pushed_at).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
        })}}
      </span>
    </div>
     <div class="details-flex">
      <p>Language:</p> 
      <span>
        {{ repo.language }}
      </span>
    </div>
     <div class="details-flex">
      <p>Size:</p> 
      <span>
        {{ repo.size }}
      </span>
    </div>
    <div class="details-flex">
      <p>Stars:</p> 
      <span>
        {{ repo.stargazers_count }}
      </span>
    </div>
    <div class="details-flex">
      <span class="view-more"><a :href="repo.html_url" target="_blank">view more</a></span>
    </div>  
  </div>
  </div>
</div>
<div class="loading" v-else>
  <p>Loading...</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      repo: {},
      isLoading:true,
    };
  },
  mounted() {
    const repoName = this.$route.params.name;
    fetch(`https://api.github.com/repos/queencobham/${repoName}`)
      .then((res) => res.json())
      .then((data) => {
        this.repo = data;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err.message);
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
.main{
  margin-top: 30px;
}
.repo-link{
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  background-color: #0969da;
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  margin-left: 10px;
}
.repo-link:hover{
  background-color: transparent;
  border: 2px solid #0969da;
  color: #24292f;
}
.repo-heading{
  margin-left: 10px;
  margin-top: 50px;
}
.repo-details{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
}
.repo-description{
 background-color: #ffffff;
 border-color: #d0d7de;
 border-radius: 6px;
 border-style: solid;
 border-width: 2px;
 padding-left: 10px;
}

.repo-description span, .details-flex p{
  color: #0969da;
  font-size: 16px;
}

.repo-description p, .details-flex span{
  font-size: 14px;
  color:#57606a;
}

.details-flex{
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding-left: 10px;
  padding-right: 10px;
}

.details-flex span{
  margin-top: 2px;
}

.repo-others{
  background-color: #ffffff;
 border-color: #d0d7de;
 border-radius: 6px;
 border-style: solid;
 border-width: 2px;
 padding-left: 2px;
 margin-top: 15px;
}

.view-more{
  margin: 15px auto;
}

.view-more a{
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  background-color: #0969da;
  padding: 0.5em 1em;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
}

.view-more a:hover{
  background-color: transparent;
  border: 2px solid #0969da;
  color: #24292f;
}

.loading{
  font-size: 30px;
  margin-left: 30px;
  margin-top: 30px;
}

@media screen and (min-width: 1024px){
.repo-details{
  margin-left: 200px;
  margin-right: 200px;
}
}

@media screen and (min-width: 1200px){
.repo-details{
  margin-left: 400px;
  margin-right: 400px;
}
}
</style>