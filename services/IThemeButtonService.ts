import { IThemeButton } from "~/models/IThemeButton";

export interface IThemeButtonService {
    getThemeButtonById(id: number): IThemeButton;
}
