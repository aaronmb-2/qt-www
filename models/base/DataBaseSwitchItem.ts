import { BasicColorSchema } from "@vueuse/core";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { DataBaseModel } from "./DataBaseModel";

export interface DataBaseSwitchItem extends DataBaseModel{
  name: string;
  code?: string;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  mode?: BasicColorSchema;
}