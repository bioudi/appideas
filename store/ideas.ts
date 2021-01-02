import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { $axios } from "~/utils/api";

@Module({
  name: "ideas",
  stateFactory: true,
  namespaced: true
})
class IdeaModule extends VuexModule {
  ideas: any = [];
  pagination: Object = {};

  @Mutation
  setIdeas(response: any) {
    this.ideas = response.ideas;
    this.pagination = response.meta;
  }

  @Action({
    commit: "setIdeas"
  })
  async getIdeas(payload: any) {
    let query: string = `/ideas?page=${payload.page}`;
    if (payload.types && payload.types.length)
      query += `&types=${payload.types}`;
    return $axios.$get(query);
  }
}

export default IdeaModule;
