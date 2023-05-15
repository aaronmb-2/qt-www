import { EToastStyling } from "~/models/response/EToastMessage";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { DataBaseModel } from "../base/DataBaseModel";

export interface DataToastMessage extends DataBaseModel {
    title: string;
    message: string;
    timeout: number;
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
    styling: EToastStyling;
  }