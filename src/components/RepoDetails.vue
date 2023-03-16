<template>
  <div class="repo-details">
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.description }}</p>
    <p>Stars: {{ repo.stargazers_count }}</p>
    <p>Watchers: {{ repo.watchers_count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repo: {},
    };
  },
  mounted() {
    const repoName = this.$route.params.name;
    fetch(`https://api.github.com/repos/queencobham/${repoName}`)
      .then((res) => res.json())
      .then((data) => (this.repo = data))
      .catch((err) => console.log(err.message));
  },
};
</script>