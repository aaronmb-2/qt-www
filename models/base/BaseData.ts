import type { TypeBaseModel } from "~/types/TypeBaseModel"

import { IBaseData } from "./IBaseData";

export abstract class BaseData<T extends BaseData<T>> implements IBaseData<T> {
    /**
     * This is the BaseData abstract class.
     *
     * @remarks
     * This class is a so-called 'abstract' class, Abstract classes are mainly for inheritance where other classes may derive from them.
     * The BaseData class implements the IBaseData interface.
     *
     * @param TypeBaseModel - That contains an id -> number. 
     *                        Types serve a different purpose, which mainly is providing type hinting/checking for props or input/output data.
     *
     */
    public id!: number;

    constructor(data: TypeBaseModel) {
        this.id = data.id
    }
}
