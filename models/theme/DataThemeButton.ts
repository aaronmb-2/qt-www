
import {
  ButtonColor,
  ButtonRounding,
  ButtonSize,
} from "~/models/theme/EThemeButton";
import { DataBaseModel } from "../base/DataBaseModel";

export interface DataThemeButton extends DataBaseModel {
  rounding: ButtonRounding;
  size: ButtonSize;
  color: ButtonColor;
}
