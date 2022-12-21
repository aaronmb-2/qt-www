import { IThemeButton } from "~~/models/IThemeButton";
import themeButtonFactory from "~~/models/ThemeButtonFactory";
import { IThemeButtonService } from "./IThemeButtonService";

enum ButtonSize {
    s = "small",
    m = "medium",
}

enum ButtonColor {
    red = "red",
    green = "green",
}

class ThemeButtonService implements IThemeButtonService {
    static themes = [
        themeButtonFactory.make({
            id: 1,
            size: ButtonSize.s,
            color: ButtonColor.red,
        })
    ] 
    defaultTheme(): IThemeButton {
        return ThemeButtonService.themes[0];
    }

    getThemeButtonById(id: number): IThemeButton {
        const theme = ThemeButtonService.themes.find((theme) => {
            return theme.id === id;
        })
        if (!theme) {
            return this.defaultTheme();
        }
        return theme
        
    }
}


export const themeButtonService = new ThemeButtonService();
