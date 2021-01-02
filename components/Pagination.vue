<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav
    class="border-t border-gray-200 flex items-center justify-between"
  >
    <div class="-mt-px w-0 flex-1 flex">
      <a
        :class="{ 'cursor-not-allowed': pagination.current_page === 1 }"
        :disabled="pagination.current_page === 1"
        @click="$emit('prev')"
        class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer"
      >
        <!-- Heroicon name: arrow-narrow-left -->
        <svg
          class="mr-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Previous
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <a
        v-for="(i, index) in pagination.total_pages"
        @click="$emit('select-page', i)"
        :key="index"
        :class="[pagination.current_page === i ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
        class="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer"
        aria-current="page"
      >
        {{ i }}
      </a>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <a
        @click="$emit('next')"
        :class="{
          'cursor-not-allowed':
            pagination.current_page === pagination.total_pages
        }"
        :disabled="pagination.current_page === pagination.total_pages"
        class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer"
      >
        Next
        <!-- Heroicon name: arrow-narrow-right -->
        <svg
          class="ml-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
  @Prop({ required: true, type: Object }) readonly pagination!: Object;
}
</script>
