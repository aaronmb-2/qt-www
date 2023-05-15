import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { EToastStyling } from "./EToastMessage";
import { IBaseModel } from "../base/IBaseModel";

export interface IToastMessage extends IBaseModel<IToastMessage> {
  title: string;
  message: string;
  timeout: number;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling: EToastStyling
}
