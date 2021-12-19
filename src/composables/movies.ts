import api from './api'

/**
 * get movies list from remote api
 * @returns Object
 */
const movies = () => {
    const {fetchRecords, records: moviesList, meta} = api()
    
    const load = (page: number) => {
        fetchRecords(`https://jsonmock.hackerrank.com/api/movies?page=${page}`)
    }

    return {moviesList, meta, load}
}

export default movies