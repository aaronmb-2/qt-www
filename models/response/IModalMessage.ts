import {
    FunctionalComponent,
    HTMLAttributes,
    VNodeProps,
  } from "nuxt/dist/app/compat/capi";
  import { EModalStyling } from "./EModalMessage";
  import { IBaseModel } from "../base/IBaseModel";
  import { EApiResponseStatus } from "~/services/response/EApiResponseHandler";

  export interface IButtonInfo extends IBaseModel<IButtonInfo> {
    to?: string;
    themeId: number;
    label: string;
  }
  
  export interface IModalMessage extends IBaseModel<IModalMessage> {
    title: string;
    message: string;
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
    styling: EModalStyling;
    buttons: IButtonInfo[];

    setStyling(status: EApiResponseStatus): void;
  }