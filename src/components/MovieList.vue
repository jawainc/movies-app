<template>
  <div class="bg-white rounded shadow-lg movie-list">
    <ul role="list" class="relative divide-y divide-gray-200">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
      >
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between space-x-6">
            <div class="flex flex-grow">
              <div class="flex space-x-3">
                <span
                  class="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full"
                  aria-hidden="true"
                >
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                </span>

                <span class="block">
                  <h2 class="text-sm font-medium">
                    {{ movie.Title }}
                  </h2>
                </span>
              </div>
            </div>
            <button
              @click="$emit('onUpdateFav', movie.imdbID)"
              type="button"
              class="relative bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
              <svg
                :class="isFav(movie.imdbID) ? 'text-yellow-500' : 'text-gray-300'"
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </button>
          </div>

          <div class="flex items-center pl-8 space-x-4 text-xs font-medium text-gray-400">
            <span> Year: {{ movie.Year }} </span>
            <span> Imdb ID: {{ movie.imdbID }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Movie from "@/types/movie";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    movies: {
      required: true,
      type: Array as PropType<Movie[]>,
    },
    favs: {
      required: true,
      type: Array as PropType<Movie[]>,
    },
  },
  setup(props) {
    /**
     * check if movie is in favorites
     */
    const isFav = (id: string) => {
      return props.favs.findIndex((item) => item.imdbID === id) > -1;
    };

    return { isFav };
  },
});
</script>
