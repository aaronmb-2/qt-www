import { BasicColorSchema } from "@vueuse/core";

import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";

import { IBaseSwitchItem } from "./IBaseSwitchItem";

import { DataBaseSwitchItem } from "./DataBaseSwitchItem";
import { BaseModel } from "./BaseModel";

export class BaseSwitchItem extends BaseModel<BaseSwitchItem> implements IBaseSwitchItem {
  /**
   * Class that acts like an object, which contains information for rendering a Switch component.
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent data that is expected (or can be used) for rendering a Switch component.
   *
   * @param DataBaseSwitchItem - That contains the following: id, name, code, icon & mode
   * @returns The implemented model of a BaseSwitchItem which can be used for rendering a Switch component
   *
   */
  name: string;
  code?: string;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  mode?: BasicColorSchema;

  constructor(data: DataBaseSwitchItem) {
    super(data);
    this.name = data.name;
    this.code = data.code;
    this.icon = data.icon;
    this.mode = data.mode;
  }
}
