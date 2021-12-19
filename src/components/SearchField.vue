<template>
  <div>
    <div class="mt-1 relative flex items-center">
      <input
        @input="$emit('update:searchText', $event.target.value)"
        type="text"
        class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full pl-8 sm:text-sm border-gray-300 rounded-md"
      />
      <div class="absolute inset-y-0 left-0 flex pt-2 pl-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
