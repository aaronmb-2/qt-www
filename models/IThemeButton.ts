import { IBaseDataModel } from "./Abstract/IBaseDataModel";

export interface IThemeButton extends IBaseDataModel<IThemeButton>{
    size: string,
    color: string,

    getTailwindClass(): string,
}
