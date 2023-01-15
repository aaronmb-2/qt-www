import { action, observable } from "mobx";

import { BasicColorSchema, useColorMode } from "@vueuse/core";
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/vue/20/solid'

import { BaseSwitchItem } from "~/models/base/BaseSwitchItem";
import { IBaseSwitchItem } from "~/models/base/IBaseSwitchItem";

import { IThemeColorService } from "./IThemeColorService";


export class ThemeColorService implements IThemeColorService {
    /**
     * Class that holds all the logic for getting and setting the theme (light/dark/auto)..
     *
     * @remarks
     * This class is a so-called 'service', which (in this case), provides the overall theme setting.
     * The ThemeColorService implements the IThemeColorService.
     *
     */
    themes: BaseSwitchItem[] = [
        // Altough mode and name look similar, the type that is implemented is different.
        // The 'mode' is necessery in order to:
        // 1: use the setTheme method, the mode can only be changed with this type of argument
        // 2: filter with getItem, the values compared should be of the same type
        new BaseSwitchItem({
            name: "light",
            icon: SunIcon,
            mode: "light",
        }),
        new BaseSwitchItem({
            name: "dark",
            icon: MoonIcon,
            mode: "dark",
        }),
        new BaseSwitchItem({
            name: "auto",
            icon: ComputerDesktopIcon,
            mode: "auto",
        }),
    ]

    mode = useColorMode({
        emitAuto: true,
    })

    getTheme(): IBaseSwitchItem {
        const theme = this.themes.find(i => i.mode === this.mode.value)

        if (!theme) {
            return this.themes[0]
        }
        return theme
    }

    @action.bound
    setTheme(theme: BasicColorSchema) {
        this.mode.value = theme
    }
}

export const themeColorService = new ThemeColorService();
