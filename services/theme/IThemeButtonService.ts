import { IThemeButton } from "~/models/theme/IThemeButton";

export interface IThemeButtonService {
    getThemeButtonById(id: number): IThemeButton;
}
