import { IThemeButton } from "./IThemeButton";
import { EButtonColor, EButtonRounding, EButtonSize } from "./EThemeButton";

import { DataThemeButton } from "./DataThemeButton";
import { BaseModel } from "../base/BaseModel";

// eslint-disable-next-line no-use-before-define
export class ThemeButton extends BaseModel<ThemeButton> implements IThemeButton {
  /**
   * Class that acts like an object, which contains styling semantics for a button.
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the button styling withing the application.
   * The ThemeButton extends the BaseModel and implements an interface called IThemeButton.
   *
   * @param DataThemeButton - That contains the following ENUMS: ButtonRounding, ButtonSize, ButtonColor
   * @returns The implemented model of a ThemeButton which can be used throughout the codebase in order to style buttons
   *
   */
  base = "inline-block";
  rounding: EButtonRounding;
  size: EButtonSize;
  color: EButtonColor;

  constructor(data: DataThemeButton) {
    super(data);
    this.rounding = data.rounding;
    this.size = data.size;
    this.color = data.color;
  }

  public getTailwindClass() {
    return `${this.base} ${this.rounding} ${this.size} ${this.color}`;
  }
}
