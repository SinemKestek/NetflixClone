const key='2b9b1b9f1c0919c4530fe2f420485043'

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    // requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}language=en-US&page=horror&page=1&include_add`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}
export default requests;