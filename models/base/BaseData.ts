import type { TypeBaseModel } from "~/types/TypeBaseModel"

import { IBaseData } from "./IBaseData";

export abstract class BaseData<T extends BaseData<T>> implements IBaseData<T> {
    public id!: number;

    constructor(data: TypeBaseModel) {
        this.id = data.id
    }
}
