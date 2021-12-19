import { mount } from "@vue/test-utils";
import MovieList from "@/components/MovieList.vue"
import Movie from "@/types/movie";

describe('MovieList.vue', () => {
    it('renders props.movies when passed', () => {
        const movies: Movie[] = [
            {Title: "movie title", Year: 2021, imdbID: "tt012"},
            {Title: "movie title 2", Year: 2022, imdbID: "tt0122"}
        ]
        const favs: Movie[] = [];
        const wrapper = mount(MovieList, {
            props: {
                movies: movies,
                favs: favs
            }
        })
        
        expect(wrapper.findAll('li').length).toEqual(2)
        expect(wrapper.html()).toContain("movie title")
        expect(wrapper.html()).toContain("movie title 2")
    })

    it('sets favorites when props.favs passed', () => {
        const movies: Movie[] = [
            {Title: "movie title", Year: 2021, imdbID: "tt012"},
            {Title: "movie title 2", Year: 2022, imdbID: "tt0122"}
        ]
        const favs: Movie[] = [{Title: "movie title", Year: 2021, imdbID: "tt012"}];
        const wrapper = mount(MovieList, {
            props: {
                movies: movies,
                favs: favs
            }
        })

        const firstRowStar = wrapper.find('li svg')
        expect(firstRowStar.classes()).toContain('text-yellow-500')
    })

    it('emits onUpdateFav when fav star clicked', async () => {
        const movies: Movie[] = [
            {Title: "movie title", Year: 2021, imdbID: "tt012"},
            {Title: "movie title 2", Year: 2022, imdbID: "tt0122"}
        ]
        const favs: Movie[] = [];
        const wrapper = mount(MovieList, {
            props: {
                movies: movies,
                favs: favs
            }
        })

        wrapper.vm.$emit('onUpdateFav', "tt012")
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().onUpdateFav).toBeTruthy()
        expect(wrapper.emitted().onUpdateFav[0]).toEqual(["tt012"])
    })
})