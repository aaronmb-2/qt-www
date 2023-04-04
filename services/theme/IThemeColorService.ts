import { BasicColorSchema } from "@vueuse/core";

import { IBaseSwitchItem } from "~/models/base/IBaseSwitchItem";

export interface IThemeColorService {
  getTheme(): IBaseSwitchItem;
  setTheme(theme: BasicColorSchema): void;
}
