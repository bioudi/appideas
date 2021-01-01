<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ideasStore } from "~/store";

@Component({
  asyncData(ctx) {
    return ideasStore.getIdeas();
  }
})
export default class IdeasPage extends Vue {
  get ideas(): any {
    return ideasStore.ideas;
  }
}
</script>
