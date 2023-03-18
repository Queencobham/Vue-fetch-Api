<template>
  <div class="repo" v-if="!isLoading">
    <div v-for="repo in pageOfRepos" :key="repo.id" class="repo-border-bottom py">
      <div class="repo-lists">
        <div class="name-visibility">
        <router-link :to="{ name: 'RepoDetails', params: { name: repo.name } }" class="name-link">
           <p class="name">{{ repo.name }}</p>
        </router-link>
        <span class="visibility">{{ repo.visibility }}</span>
        </div>
        <div class="language-update">
        <p class="language">{{ repo.language }}</p>
        <p class="update">Updated on {{ new Date(repo.updated_at).toLocaleString('default', {
        month: 'short',
        day: 'numeric',
        })}}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <ul>
        <li v-for="pageNumber in pageNumbers" :key="pageNumber" 
            :class="{ 'active': pageNumber === currentPage }"
            @click="paginate(pageNumber)">
          {{ pageNumber }}
        </li>
      </ul>
    </div>
  </div>
  <div class="loading" v-else>
    <p>Fetching repositories...</p>
 </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [],
      currentPage: 1,
      perPage: 5,
      isLoading:true,
    };
  },
 
  computed: {
    pageOfRepos() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repos.slice(startIndex, endIndex);
    },
    pageNumbers() {
      const totalPages = Math.ceil(this.repos.length / this.perPage);
      const pageNumbersArray = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbersArray.push(i);
      }
      return pageNumbersArray;
    },
  },
  mounted() {
    fetch(`https://api.github.com/users/queencobham/repos`)
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err.message);
        this.isLoading = false;
      });
  },
  methods: {
    paginate(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
.repo{
 width: 100%;
}

.py{
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.repo-border-bottom{
  border-bottom: 1px solid #d0d7de;
} 

.name-visibility{
  display: flex;
  align-items: center;
  gap: 7px;
}

.name{
  color: #0969da;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  text-decoration: none;
}

.name-link{
  text-decoration: none;
}

.name-link:hover{
text-decoration: underline;
text-decoration-color: #0969da;
}

.visibility{
 font-size: 12px;
 color: #57606a;
 font-weight: 500;
 border: 1px solid #d0d7de;
 padding: 0 7px;
 border-radius: 2em;
 white-space: nowrap;
 margin-top: 5px;
 padding-bottom: 2px;
}

.language-update{
color:#57606a;
font-size: 13px;
display: flex;
gap: 20px;
font-weight: 400;
margin-top: -20px;
}

.pagination{
 display: grid;
 place-content: center;
}

.pagination ul li {
  display: inline-block;
  cursor: pointer;
  padding: 3px 15px;
  margin-right: 30px;
  margin-top: 20px;
  color: #57606a;
  font-weight: 500;
 border: 1px solid #d0d7de;
}

.pagination ul li:hover{
   background-color: #ebeef0;
}

.pagination ul li.active {
  background-color: #ebeef0;
}

.loading{
  font-size: 20px;
  margin-left: 20px;
  margin-top: 20px;
}


@media only screen and (max-width: 500px) {
 .pagination ul li {
  padding: 3px 10px;
  margin-right: 10px;
}
}
</style>
