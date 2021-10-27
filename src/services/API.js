export default class ApiService {
  constructor() {
    this.searchIndex = 0;
    this.query = '';
    this.page = 1;
    this.totalFound = 0;
    this.key = '0ed255c3e41b7b2939a1a8ab382f6c30';
  }
  searchMovies() {
    const moviesUrls = [
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}&language=en-US&page=${this.page}&include_adult=false`,
      `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${this.query}&page=${this.page}&include_adult=false`,
      `https://api.themoviedb.org/3/movie/${this.query}?api_key=${this.key}&language=en-US&page=${this.page}&include_adult=false`,
    ];
    let url = moviesUrls[this.searchIndex];

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`No data for the query'${this.query}'`));
    });
  }

  reset() {
    this.page = 1;
    this.totalFound = 0;
  }
  set request(newRequest) {
    this.query = newRequest;
  }
  set searchType(index) {
    this.searchIndex = index;
  }
}
