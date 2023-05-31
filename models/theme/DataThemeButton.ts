import { DataBaseModel } from "../base/DataBaseModel";
import {
  EButtonColor,
  EButtonRounding,
  EButtonSize,
} from "~/models/theme/EThemeButton";

export interface DataThemeButton extends DataBaseModel {
  rounding: EButtonRounding;
  size: EButtonSize;
  color: EButtonColor;
}
