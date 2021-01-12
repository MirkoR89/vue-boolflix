new Vue({
  el: '#root',
  data: {
    personalApiKey: '9ef5a9e86131aa08d5c204c4cea437a0',
    search: null,
    moviesList: null,
  },
  methods: {
    // Function to call back API Data
    sendRequest() {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.personalApiKey}&query= ${this.search}`)
        .then(response => {
          this.moviesList = response.data.results

          //Loop to move vote to stars
          this.moviesList.forEach(item => {
              let starsVote = Number(Math.floor(item.vote_average / 2));
              return item.vote = starsVote
          });

        }
      )
    }
  }
})
