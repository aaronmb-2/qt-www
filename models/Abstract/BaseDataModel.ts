import type { BaseModelData } from "~/types/BaseModelData"
import { IBaseDataModel } from "./IBaseDataModel";

export abstract class BaseDataModel<T extends BaseDataModel<T>> implements IBaseDataModel<T> {
    public id!: number;

    constructor(data: BaseModelData) {
        this.id = data.id
    }
}
