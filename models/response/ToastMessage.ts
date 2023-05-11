import { TypeToastMessage } from "~/types/TypeToastMessage";
import { BaseData } from "../base/BaseData";
import { IToastMessage } from "./IToastMessage";

import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { ToastStyling } from "./EToastMessage";

// eslint-disable-next-line no-use-before-define
export class ToastMessage
  extends BaseData<ToastMessage>
  implements IToastMessage
{
  /**
   * Class that acts like an object, which contains information regarding a Toast.
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the toast styling and text withing the application.
   * The ToastMessage extends the BaseData model and implements an interface called IToastMessage.
   *
   * @param TypeToastMessage - That contains the following information: title, message, timeout, icon & styling 
   * @returns The implemented model of a ToastMessage which can be used within the ToastMessageService for displaying information to the user.
   *
   */
  title: string;
  message: string;
  timeout: number;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling: ToastStyling;

  constructor(data: TypeToastMessage) {
    super(data);
    this.title = data.title;
    this.message = data.message;
    this.timeout = data.timeout;
    this.icon = data.icon;
    this.styling = data.styling
  }
}
