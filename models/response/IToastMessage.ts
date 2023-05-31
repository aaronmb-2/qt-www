import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { IBaseModel } from "../base/IBaseModel";
import { EToastStyling } from "./EToastMessage";

export interface IToastMessage extends IBaseModel<IToastMessage> {
  title: string;
  message: string;
  timeout: number;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling: EToastStyling;
}
