import { IBaseData } from "../base/IBaseData";

export interface IThemeButton extends IBaseData<IThemeButton>{
    rounding: string,
    size: string,
    color: string,

    getTailwindClass(): string,
}
