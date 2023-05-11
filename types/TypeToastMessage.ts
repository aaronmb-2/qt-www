import { ToastStyling } from "~/models/response/EToastMessage";
import { TypeBaseModel } from "./TypeBaseModel";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";


export interface TypeToastMessage extends TypeBaseModel {
  title: string;
  message: string;
  timeout: number;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling: ToastStyling;
}
