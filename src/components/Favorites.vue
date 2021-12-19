<template>
  <div class="favs bg-white rounded shadow-lg">
    <ul role="list" class="relative divide-y divide-gray-200">
      <li
        v-for="fav in favs"
        :key="fav.imdbID"
        class="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
      >
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between space-x-6">
            <div class="flex flex-grow">
              <span class="block">
                <h2 class="text-sm font-medium">
                  {{ fav.Title }}
                </h2>
              </span>
            </div>
            <button
              @click="$emit('onRemoveFav', fav.imdbID)"
              type="button"
              class="relative bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>

          <div class="flex items-center space-x-4 text-xs font-medium text-gray-400">
            <span> Year: {{ fav.Year }} </span>
            <span> Imdb ID: {{ fav.imdbID }} </span>
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
    favs: {
      required: true,
      type: Array as PropType<Movie[]>,
    },
  },
});
</script>
