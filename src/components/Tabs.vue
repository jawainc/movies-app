<template>
  <div class="tabs group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200">
    <button
      type="button"
      class="flex rounded-md tab-list focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
      @click="
        activeTab = 'list';
        $emit('onTabChange', 'list');
      "
    >
      <span
        x-show="true"
        class="p-1.5 pl-2.5 pr-3.5 space-x-2 rounded-md flex items-center text-sm font-medium"
        :class="
          activeTab === 'list'
            ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5'
            : ''
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          :class="{ 'text-green-400': activeTab === 'list' }"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>List</span>
      </span>
    </button>
    <button
      class="tab-favs ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 space-x-1 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
      :class="
        activeTab === 'favs' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''
      "
      @click="
        activeTab = 'favs';
        $emit('onTabChange', 'favs');
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        :class="{ 'text-yellow-400': activeTab === 'favs' }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <span>Favroites</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeTab = ref("list");
    return { activeTab };
  },
});
</script>
