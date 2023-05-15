import { IBaseModel } from "../base/IBaseModel";
import { EButtonColor, EButtonRounding, EButtonSize } from "./EThemeButton";

export interface IThemeButton extends IBaseModel<IThemeButton> {
  rounding: EButtonRounding;
  size: EButtonSize;
  color: EButtonColor;

  getTailwindClass(): string;
}
