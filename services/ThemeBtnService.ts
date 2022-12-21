import { makeObservable } from "mobx";
import { BaseDataModel } from "~~/models/Abstract/BaseDataModel";
import { IThemeButton } from "~~/models/IThemeButton";
import { ThemeButtonData } from "~~/types/ThemeButtonData";
import { IThemeButtonService } from "./IThemeButtonService";

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

export class ThemeBtnService implements IThemeButtonService {
    static themes = [
        new ThemeButton({
            id: 1,
            size: "sssss",
            color: "red",
        }),
    ]

    // constructor() {
    //     makeObservable(this);
    // }

    getThemeButtonById(id: number): IThemeButton {
        const themeBtn = ThemeBtnService.themes.find((theme) => {
            theme.id === id;
        })
        if (!themeBtn){
            return ThemeBtnService.themes[0];
        }
        return themeBtn;
        // return ThemeBtnService.themes.find((theme) => {
        //     return theme.id === id;
        // });
    }
}

export const themeBtnService = new ThemeBtnService();
