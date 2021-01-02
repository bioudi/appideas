<template>
  <IdeasList></IdeasList>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ideasStore } from "~/store";

@Component({
  asyncData(ctx) {
    return ideasStore.getIdeas({ page: 1 });
  }
})
export default class IdeasPage extends Vue {}
</script>
