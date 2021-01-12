new Vue ({
  el: '#root',
  data: {
    search: null,
    moviesList: null
  },
  methods: {
    sendRequest(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=9ef5a9e86131aa08d5c204c4cea437a0&query= ${this.search}`)
      .then(response => {
        console.log(response.data.response);
      })
    }
  }
})
