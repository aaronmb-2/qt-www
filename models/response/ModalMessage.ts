import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import { BaseModel } from "../base/BaseModel";
import { EModalStyling } from "./EModalMessage";
import { DataButtonInfo, DataModalMessage } from "./DataModalMessage";
import { IModalMessage } from "./IModalMessage";
import { EApiResponseStatus } from "~/services/response/EApiResponseHandler";

export class ModalMessage
  // eslint-disable-next-line no-use-before-define
  extends BaseModel<ModalMessage>
  implements IModalMessage
{
  /**
   * Class that acts like an object, which contains information regarding a Modal (message).
   *
   * @remarks
   * This class is a so-called 'model', which purpose is to represent the Modal styling, text & buttons within the (model) application.
   * The ModalMessage extends the BaseModel model and implements an interface called IModalMessage.
   *
   * @param DataModalMessage - That contains the following information: id, title, message, status & buttons
   * @returns The implemented model of a ModalMessage which can be used within the ModalMessageService for displaying information/notifications to the user.
   *
   */
  title: string;
  message: string;
  inProgress?: boolean;
  icon!: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  styling!: EModalStyling;
  buttons: DataButtonInfo[];

  constructor(data: DataModalMessage) {
    super(data);
    const { title, message, status, buttons, inProgress = false } = data;
    this.title = title;
    this.message = message;
    this.inProgress = inProgress;
    this.setStyling(status);
    this.buttons = buttons;
  }

  setStyling(status: EApiResponseStatus): void {
    switch (status) {
      case EApiResponseStatus.success:
        this.icon = CheckCircleIcon;
        this.styling = EModalStyling.success;
        break;
      case EApiResponseStatus.error:
        this.icon = XCircleIcon;
        this.styling = EModalStyling.error;
        break;
      case EApiResponseStatus.info:
        this.icon = InformationCircleIcon;
        this.styling = EModalStyling.info;
        break;
    }
  }
}
