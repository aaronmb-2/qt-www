import { IBaseData } from "../base/IBaseData";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { ToastStyling } from "./EToastMessage";

export interface IToastMessage extends IBaseData<IToastMessage> {
  title: string;
  message: string;
  timeout: number;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling: ToastStyling
}
