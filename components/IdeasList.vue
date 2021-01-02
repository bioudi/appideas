<template>
  <div class="flex">
    <div class="p-4 w-2/6">
      <span class="text-base font-medium text-gray-900">Type: </span>
      <div class="relative flex items-start mt-4 mb-1">
        <div class="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            v-model="types"
            value="WEBAPP"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="comments" class="font-medium text-gray-700">Webapp</label>
        </div>
      </div>
      <div>
        <div class="relative flex items-start mb-1">
          <div class="flex items-center h-5">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              v-model="types"
              value="ANDROID"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="candidates" class="font-medium text-gray-700"
              >Andoid</label
            >
          </div>
        </div>
      </div>
      <div>
        <div class="relative flex items-start mb-1">
          <div class="flex items-center h-5">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              v-model="types"
              value="IOS"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="offers" class="font-medium text-gray-700">iOS</label>
          </div>
        </div>
      </div>
      <div>
        <div class="relative flex items-start mb-1">
          <div class="flex items-center h-5">
            <input
              id="extensions"
              name="extensions"
              type="checkbox"
              v-model="types"
              value="EXTENSION"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="extensions" class="font-medium text-gray-700"
              >Chrome Extensions</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="(idea, index) in ideas" :key="index">
            <a
              :href="idea.url"
              target="_blank"
              class="block hover:bg-gray-50 focus:outline-none"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-indigo-600 truncate">
                    {{ idea.name }}
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <p
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ idea.type.toLowerCase() }}
                    </p>
                  </div>
                </div>
                <div class="mt-2 mb-4 max-w-xl">
                  <p class="text-sm font-medium text-gray-500 truncate">
                    {{ idea.description }}
                  </p>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <span
                      v-for="(category, index) in getCategories(idea)"
                      :key="index"
                      :class="{ 'ml-2': index !== 0 }"
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {{ category }}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <client-only>
        <Pagination
          :pagination="pagination"
          @select-page="page => getIdeas({ page })"
          @next="getIdeas({ page: pagination.current_page + 1 })"
          @prev="getIdeas({ page: pagination.current_page - 1 })"
        ></Pagination>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ideasStore } from "~/store";

@Component
export default class IdeasList extends Vue {
  types: [] = [];

  get ideas(): any {
    return ideasStore.ideas;
  }

  get pagination(): any {
    return ideasStore.pagination;
  }

  getCategories(idea: any): Array<string> {
    return idea.category.split(",");
  }

  getIdeas(payload: Object): void {
    ideasStore.getIdeas(payload);
  }

  @Watch("types")
  nameChanged(newVal: []) {
    ideasStore.getIdeas({ page: 1, types: newVal });
  }
}
</script>
