<template>
  <div class="repo">
    <div v-for="repo in pageOfRepos" :key="repo.id" class="repo-border-bottom py">
      <div class="repo-lists">
        <div class="name-visibility">
        <router-link :to="{ name: 'RepoDetails', params: { name: repo.name } }">
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
      <!-- <button @click="toggleStar">
        <span v-if="starred" class="star-flex">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
          </svg>
          <span>Star</span>
        </span>
        <span v-if="!starred" class="star-flex starred">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star-fill starred-button-icon d-inline-block mr-2">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
          </svg>
          <span>Starred</span>
        </span>
      </button> -->
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
</template>

<script>
export default {
  data() {
    return {
      repos: [],
      currentPage: 1,
      perPage: 5,
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
    fetch(`https://api.github.com/users/queencobham/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => (this.repos = data))
      .catch((err) => console.log(err.message));
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

/* button{
  padding: 5px 15px;
  margin: 0;
  height: 30px;
  background-color: #f6f8fa;
  color:#24292f;
  font-size: 12px;
  border-color: rgba(27,31,36,0.15);
  fill: #57606a;
  font-weight: 500;
  border-radius: 6px;
}

.star-flex{
  display: flex;
  align-items: center;
  gap: 10px;
}

.starred{
  fill: #eac54f;
} */

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
</style>