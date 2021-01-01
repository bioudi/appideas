import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { $axios } from "~/utils/api";

@Module({
  name: "ideas",
  stateFactory: true,
  namespaced: true
})
class IdeaModule extends VuexModule {
  ideas: any = [];

  @Mutation
  setIdeas(ideas: any) {
    this.ideas = ideas;
  }

  @Action
  async getIdeas() {
    const response = await $axios.$get("/ideas");
    this.setIdeas(response.ideas);
  }
}

export default IdeaModule;
