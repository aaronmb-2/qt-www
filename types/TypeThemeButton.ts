import { TypeBaseModel } from "./TypeBaseModel";
import {
  ButtonColor,
  ButtonRounding,
  ButtonSize,
} from "~/models/theme/EThemeButton";

export interface TypeThemeButton extends TypeBaseModel {
  rounding: ButtonRounding;
  size: ButtonSize;
  color: ButtonColor;
}
