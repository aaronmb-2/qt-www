import { ThemeButtonData } from "../types/ThemeButtonData";
import { BaseDataModel } from "./Abstract/BaseDataModel";
import { IThemeButton } from "./IThemeButton"

export class ThemeButton extends BaseDataModel<ThemeButton> implements IThemeButton {
    size: string;
    color: string;

    constructor(data: ThemeButtonData) {
        super(data);
        this.size = data.size;
        this.color = data.color;
    }

    public getTailwindClass() {
        return `${this.size} ${this.color}`
    }
}
