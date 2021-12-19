import api from './api'

/**
 * search records on remote api
 * @returns Object
 */
const search = () => {
    const {fetchRecords, records: searchList, meta: searchMeta} = api()
    
    const doSearch = (title: string, page: number) => {
        fetchRecords(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`)
    }    

    return {searchList, searchMeta, doSearch}
}

export default search