new Vue({
  el: '#root',
  data: {
    personalApiKey: '9ef5a9e86131aa08d5c204c4cea437a0',
    apiMovies: 'https://api.themoviedb.org/3/search/movie',
    apiTvShows: 'https://api.themoviedb.org/3/search/tv',
    moviesList: false,
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

          //Loop to move..
          this.moviesList.forEach(movie => {

            //.. languages to icon flags
            if (movie.original_language == "en") {
              movie.original_language = "gb";
            } else if (movie.original_language == "zh") {
              movie.original_language = "cn"
            } else if (movie.original_language == "ko") {
              movie.original_language = "kr"
            } else if(movie.original_language == "vi"){
              movie.original_language = "vn";
            }else if(movie.original_language == "et"){
              movie.original_language = "ee";
            }else if(movie.original_language == "ja"){
              movie.original_language = "jp";
            }else if(movie.original_language == "da"){
              movie.original_language = "dk";
            } else if(movie.original_language == "hu"){
              movie.original_language = "ua";
            }

            //..vote to stars
            let starsVote = Number(Math.floor(movie.vote_average / 2));
            return movie.vote = starsVote
          });
        }),
        // Request API TvShows
        axios
        .get(`${this.apiTvShows}?api_key=${this.personalApiKey}&query= ${this.search}`)

        .then(response => {
          this.tvShowsList = response.data.results

          //Loop to move..
          this.tvShowsList.forEach(tvShow => {

            //.. languages to icon flags
            if (tvShow.original_language == "en") {
              tvShow.original_language = "gb";
            } else if (tvShow.original_language == "zh") {
              tvShow.original_language = "cn"
            } else if (tvShow.original_language == "ko") {
              tvShow.original_language = "kr"
            } else if(tvShow.original_language == "vi"){
              tvShow.original_language = "vn";
            }else if(tvShow.original_language == "et"){
              tvShow.original_language = "ee";
            }else if(tvShow.original_language == "ja"){
              tvShow.original_language = "jp";
            }else if(tvShow.original_language == "da"){
              tvShow.original_language = "dk";
            } else if(tvShow.original_language == "hu"){
              tvShow.original_language = "ua";
            }

            //..vote to stars
            let starsVote = Number(Math.floor(tvShow.vote_average / 2));
            return tvShow.vote = starsVote
          });
        })
    }
  }
})
