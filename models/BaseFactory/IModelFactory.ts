import { BaseModelData } from "../../types/BaseModelData";
import { IBaseDataModel } from "../Abstract/IBaseDataModel";

export abstract class IModelFactory<T extends IBaseDataModel<T>> {
    abstract make(data: BaseModelData): T;

    makeMultiple(data: BaseModelData[]): T[] {
        return data.map((dataItem) => this.make(dataItem));
    }
}
