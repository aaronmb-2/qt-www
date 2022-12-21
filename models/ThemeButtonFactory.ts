import { ThemeButtonData } from "../types/ThemeButtonData";
import { IModelFactory } from "./BaseFactory/IModelFactory";
import { IThemeButton } from "./IThemeButton";
import { ThemeButton } from "./ThemeButton";

class ThemeButtonFactory extends IModelFactory<IThemeButton> {
    make(data: ThemeButtonData): IThemeButton {
        return new ThemeButton(data);
    }
}

const themeButtonFactory = new ThemeButtonFactory();

export default themeButtonFactory;
