import { BasicColorSchema } from "@vueuse/core";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { IBaseModel } from "./IBaseModel";

export interface IBaseSwitchItem extends IBaseModel<IBaseSwitchItem> {
  name: string;
  code?: string;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  mode?: BasicColorSchema;
}
