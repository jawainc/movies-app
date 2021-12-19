import Meta from '@/types/meta'
import Movie from '@/types/movie'
import {ref} from 'vue'

/**
 * api utilities
 * @returns Object
 */
const api = () => {
    const records = ref<Movie[]>([])
    const meta = ref<Meta>({
        page: 1,
        per_page: 10,
        total: 0,
        total_pages: 0
    })

    /**
     * do remote api request for fething data
     * @param url 
     */
    const fetchRecords = async (url: RequestInfo) => {
        const response = await fetch(url)
        
        const result = await response.json()    
        records.value = result.data
        meta.value = result  
       
    }

    return {fetchRecords, records, meta}
}

export default api