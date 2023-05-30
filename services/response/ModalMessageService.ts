import { action, observable, computed, makeAutoObservable } from "mobx";
import { ModalMessage } from "~/models/response/ModalMessage";
import { IModalMessageService } from "./IModalMessageService";
import { DataModalMessage } from "~/models/response/DataModalMessage";

export class ModalMessageService implements IModalMessageService {
  /**
   * Class that holds all information regarding the ModalMessages and displaying ModalMessages to the user.
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides ModalMessages to the client.
   * The ModalMessageService implements the IModalMessageService
   *
   */

  @observable
  modalMessagesQueue: ModalMessage[] = [];

  @computed
  get displayModelMessage(): ModalMessage {
    return this.modalMessagesQueue[0]
  }

  @computed
  get showModalMessage(): boolean {
    return this.modalMessagesQueue.length > 0;
  }

  @action.bound
  addModal(addToastMessage: ModalMessage | DataModalMessage) {
    var toastMessage = addToastMessage
    if (!(toastMessage instanceof ModalMessage)) {
      toastMessage = new ModalMessage({
        id: toastMessage.id,
        title: toastMessage.title,
        inProgress: toastMessage.inProgress,
        message: toastMessage.message,
        status: toastMessage.status,
        buttons: toastMessage.buttons,
    })
    }
    this.modalMessagesQueue.push(toastMessage)
  }

  @action.bound
  removeModal(modalMessageId: number | string) {
    this.modalMessagesQueue = this.modalMessagesQueue.filter(
      (modalMessage) => modalMessage.id !== modalMessageId
    );
  }
}

export const modalMessageService = new ModalMessageService();
makeAutoObservable(modalMessageService, {}, { autoBind: true });