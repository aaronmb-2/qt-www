import { ToastMessage } from "~/models/response/ToastMessage";

export interface IToastMessageService {
    toastMessagesQueue: ToastMessage[];

    toastMessageQueueLength: number;
    displayToastMessages: ToastMessage[];

    addToast(toastMessage: ToastMessage): void;
    removeToast(toastMessageId: number): void;
  }