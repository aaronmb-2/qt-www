import { makeAutoObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

import { IThemeButton } from "~/models/theme/IThemeButton";
import { ThemeButton } from "~/models/theme/ThemeButton";
import { ButtonColor, ButtonRounding, ButtonSize } from "~/models/theme/EThemeButton";

import { IThemeButtonService } from "./IThemeButtonService";


export class ThemeButtonService implements IThemeButtonService {
    /**
     * Class that holds all the logic for creating and maintaining TailwindCSS properties for styling a button.
     *
     * @remarks
     * This class is a so-called 'service', which (in this case), provides styling for buttons.
     * The ThemeButtonServices implements the IThemeButtonService.
     *
     */
    static themes = [
        new ThemeButton({
            id: 1,
            rounding: ButtonRounding.half,
            size: ButtonSize.xxs,
            color: ButtonColor.transparent,
        }),
        new ThemeButton({
            id: 2,
            rounding: ButtonRounding.full,
            size: ButtonSize.m,
            color: ButtonColor.mblue,
        }),
    ]

    @observable
    defaultTheme: number = 1;

    // @action.bound
    // setDifferentTheme() {
    //     this.defaultTheme = 1;
    // }

    getThemeButtonById(id: number): IThemeButton {
        const themeButton = ThemeButtonService.themes.find((button) => button.id == id);

        if (!themeButton) {
            return ThemeButtonService.themes[0];
        }
        
        return themeButton;
    }
}

export const themeButtonService = new ThemeButtonService();
if (typeof window !== "undefined") {
    makeAutoObservable(themeButtonService, {}, { autoBind: true });
    makePersistable(themeButtonService, {
        name: "ThemeButtonService",
        properties: ["defaultTheme"],
        storage: localStorage
    });
}