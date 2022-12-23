import { TypeThemeButton } from "~/types/TypeThemeButton";

import { BaseData } from "../base/BaseData";
import { IThemeButton } from "./IThemeButton"
import { ButtonColor, ButtonRounding, ButtonSize } from "./EThemeButton";

export class ThemeButton extends BaseData<ThemeButton> implements IThemeButton {
    base: string = "inline-block";
    rounding: ButtonRounding;
    size: ButtonSize;
    color: ButtonColor;

    constructor(data: TypeThemeButton) {
        super(data);
        this.rounding = data.rounding;
        this.size = data.size;
        this.color = data.color;
    }

    public getTailwindClass() {
        return `${this.base} ${this.rounding} ${this.size} ${this.color}`
    }
}