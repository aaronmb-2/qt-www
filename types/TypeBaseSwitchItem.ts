import { BasicColorSchema } from "@vueuse/core";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";

export interface TypeBaseSwitchItem {
  name: string;
  code?: string;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  mode?: BasicColorSchema;
}
