import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import ideas from "~/store/ideas";

let ideasStore: ideas;

function initialiseStores(store: Store<any>): void {
  ideasStore = getModule(ideas, store);
}

export { initialiseStores, ideasStore };
