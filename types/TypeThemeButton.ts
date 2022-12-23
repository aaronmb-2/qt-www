import { ButtonColor, ButtonRounding, ButtonSize } from "~/models/theme/EThemeButton";
import { TypeBaseModel } from "./TypeBaseModel";

export interface TypeThemeButton extends TypeBaseModel {
    rounding: ButtonRounding;
    size: ButtonSize;
    color: ButtonColor;
}
