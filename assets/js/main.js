new Vue ({
  el: '#root',
  data: {
    search: null,
    moviesList: null,
    personalApiKey: '9ef5a9e86131aa08d5c204c4cea437a0'
  },
  methods: {
    sendRequest(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.personalApiKey}&query= ${this.search}`)
      .then(response => {
        console.log(response.data.results);
        this.moviesList = response.data.results
      })
    }
  }
})
