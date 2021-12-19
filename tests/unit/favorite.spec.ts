import { shallowMount } from "@vue/test-utils";
import MovieList from "@/components/Favorites.vue"
import Movie from "@/types/movie";

describe('Favorites.vue', () => {
    it('renders props.favs when passed', () => {
        const removeFav = jest.fn()
        const favs: Movie[] = [
            {Title: "movie title", Year: 2021, imdbID: "tt012"},
            {Title: "movie title 2", Year: 2022, imdbID: "tt0122"}
        ]
        const wrapper = shallowMount(MovieList, {
            props: {
                favs: favs,
                removeFav
            }
        })
        
        expect(wrapper.findAll('li').length).toEqual(2)
        expect(wrapper.html()).toContain("movie title")
        expect(wrapper.html()).toContain("movie title 2")
    })

    it('calls removeFav when trash icon clicked', async () => {
        const favs: Movie[] = [
            {Title: "movie title", Year: 2021, imdbID: "tt012"},
            {Title: "movie title 2", Year: 2022, imdbID: "tt0122"}
        ]
        const wrapper = shallowMount(MovieList, {
            props: {
                favs: favs
            }
        })

        wrapper.vm.$emit('onRemoveFav', "tt012")
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().onRemoveFav).toBeTruthy()
        expect(wrapper.emitted().onRemoveFav[0]).toEqual(["tt012"])
    })
})