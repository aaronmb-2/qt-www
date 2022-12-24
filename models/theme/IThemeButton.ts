import { IBaseData } from "../base/IBaseData";
import { ButtonColor, ButtonRounding, ButtonSize } from "./EThemeButton";

export interface IThemeButton extends IBaseData<IThemeButton>{
    rounding: ButtonRounding,
    size: ButtonSize,
    color: ButtonColor,

    getTailwindClass(): string,
}
