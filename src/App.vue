<template>
  <div class="max-w-3xl mx-auto my-10">
    <div class="flex items-center justify-between mb-6">
      <h1 class="flex items-center space-x-3 text-xl font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
        <span>Movies</span>
      </h1>

      <Tabs @onTabChange="onTabChange" />
    </div>
    <div v-if="currentTab === 'list'" class="flex flex-col space-y-6">
      <SearchField v-model:search-text.trim="searchText" />
      <MovieList :favs="favs" :movies="moviesData" @onUpdateFav="updateFav" />
      <Pagination
        v-if="paginateMeta.total_pages > 1"
        v-model="paginateMeta.page"
        :pages="paginateMeta.total_pages"
        :range-size="2"
        @update:modelValue="onPaginate"
      />
    </div>

    <Favorites v-if="currentTab === 'favs'" :favs="favs" @onRemoveFav="removeFav" />
    <NoRecords v-if="!moviesData.length" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import MovieList from "./components/MovieList.vue";
import Favorites from "./components/Favorites.vue";
import Tabs from "./components/Tabs.vue";
import NoRecords from "./components/NoRecords.vue";
import SearchField from "./components/SearchField.vue";
import movies from "./composables/movies";
import searches from "./composables/search";
import Movie from "./types/movie";
import Pagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import Meta from "./types/meta";

export default defineComponent({
  name: "App",
  components: {
    MovieList,
    Favorites,
    Tabs,
    SearchField,
    Pagination,
    NoRecords,
  },
  setup() {
    const favs = ref<Movie[]>([]);
    const moviesData = ref<Movie[]>([]);
    const paginateMeta = ref<Meta>({
      page: 1,
      per_page: 10,
      total_pages: 0,
      total: 0,
    });
    const currentTab = ref("list");
    const searchText = ref("");
    const { moviesList, meta, load } = movies();
    const { searchList, searchMeta, doSearch } = searches();

    // fetch records
    load(1);

    // Watchers
    watch(moviesList, () => {
      moviesData.value = moviesList.value;
      paginateMeta.value = meta.value;
    });
    watch(searchList, () => {
      moviesData.value = searchList.value;
      paginateMeta.value = searchMeta.value;
    });
    watch(searchText, () => {
      search(searchText.value, 1);
    });

    /**
     * Add/Remove Favorites
     */
    const updateFav = (id: string) => {
      const favIndex = favs.value.findIndex((item) => item.imdbID === id);
      if (favIndex !== -1) {
        favs.value.splice(favIndex, 1);
      } else {
        const movie = moviesData.value.find(({ imdbID }) => imdbID === id);
        if (movie) {
          favs.value.push(movie);
        }
      }
    };
    const removeFav = (id: string) => {
      favs.value.splice(
        favs.value.findIndex((item) => item.imdbID === id),
        1
      );
    };

    /**
     * on clicking tabs change tab and contents
     */
    const onTabChange = (tab: string) => {
      if (tab === "list") load(1);
      currentTab.value = tab;
    };

    /**
     * search movies
     */
    const search = (title: string, page: number) => {
      doSearch(title, page);
    };

    /**
     * pagination handler
     */
    const onPaginate = (page: number) => {
      searchText.value.replace(/ /g, "") === ""
        ? load(page)
        : doSearch(searchText.value, page);
    };

    return {
      moviesData,
      paginateMeta,
      updateFav,
      favs,
      onTabChange,
      currentTab,
      removeFav,
      searchText,
      onPaginate,
    };
  },
});
</script>

<style scoped>
::v-deep(.Pagination) {
  @apply mt-8;
}
::v-deep(.Page) {
  @apply bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-6 py-3 border text-sm font-medium;
}
</style>
