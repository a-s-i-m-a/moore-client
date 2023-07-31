import {ApartmentsStore} from "./apartments.store";
import {ManagersStore} from "./managers.store";

export class RootStore {
    apartmentsStore: ApartmentsStore;
    managersStore: ManagersStore;


    constructor() {
        this.apartmentsStore = new ApartmentsStore();
        this.managersStore = new ManagersStore();

    }
}

const rootStore = new RootStore();
export default rootStore;