new Vue({
  el: '#root',
  data: {
    personalApiKey: '9ef5a9e86131aa08d5c204c4cea437a0',
    apiMovies: 'https://api.themoviedb.org/3/search/movie',
    apiTvShows: 'https://api.themoviedb.org/3/search/tv',
    moviesList: null,
    tvShowsList: null,
    search: null
  },
  methods: {
    // Function to call back API Data
    sendRequest() {
      // Reques API Movies
      axios
        .get(`${this.apiMovies}?api_key=${this.personalApiKey}&query= ${this.search}`)

        .then(response => {
          this.moviesList = response.data.results

          //Loop to move vote to stars
          this.moviesList.forEach(item => {
            let starsVote = Number(Math.floor(item.vote_average / 2));
            return item.vote = starsVote
          });
        }
      ),
      // Request API TvShows
      axios
        .get(`${this.apiTvShows}?api_key=${this.personalApiKey}&query= ${this.search}`)

        .then(response => {
          this.tvShowsList = response.data.results

          //Loop to move vote to stars
          this.tvShowsList.forEach(item => {
            let starsVote = Number(Math.floor(item.vote_average / 2));
            return item.vote = starsVote
          });
        }
      )
    }
  }
})
