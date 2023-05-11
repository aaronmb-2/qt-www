import { action, observable, computed, makeAutoObservable } from "mobx";
import { ToastMessage } from "~/models/response/ToastMessage";
import { IToastMessageService } from "./IToastMessageService";

export class ToastMessageService implements IToastMessageService {
  /**
   * Class that holds all information regarding the ToastMessages and displaying ToastMessages to the user.
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides ToastMessages to the client.
   * The TierService implements the IToastMessageService
   *
   */
  static NUMBER_OF_CONSECUTIVE_TOASTS = 2

  @observable
  toastMessagesQueue: ToastMessage[] = [];

  @computed
  get toastMessageQueueLength(): number {
    return this.toastMessagesQueue.length
  }

  @computed
  get displayToastMessages(): ToastMessage[] {
    return this.toastMessagesQueue.slice(0, 2);
  }

  @action.bound
  addToast(toastMessage: ToastMessage) {
    this.toastMessagesQueue.push(toastMessage);
    if (this.toastMessagesQueue.length > ToastMessageService.NUMBER_OF_CONSECUTIVE_TOASTS) {
      const lastToastMessage =
        this.toastMessagesQueue[this.toastMessagesQueue.length - ToastMessageService.NUMBER_OF_CONSECUTIVE_TOASTS];
      setTimeout(() => {
        this.removeToast(toastMessage.id);
      }, lastToastMessage.timeout + toastMessage.timeout + 1000);
    } else {
      setTimeout(() => {
        this.removeToast(toastMessage.id);
      }, toastMessage.timeout);
    }
  }

  @action.bound
  removeToast(toastMessageId: number) {
    this.toastMessagesQueue = this.toastMessagesQueue.filter(
      (toastMessage) => toastMessage.id !== toastMessageId
    );
  }
}

export const toastMessageService = new ToastMessageService();
makeAutoObservable(toastMessageService, {}, { autoBind: true });