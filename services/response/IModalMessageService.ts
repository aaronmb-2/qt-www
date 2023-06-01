import { ModalMessage } from "~/models/response/ModalMessage";

export interface IModalMessageService {
  modalMessagesQueue: ModalMessage[];

  displayModalMessage: ModalMessage;
  showModalMessage: boolean;

  addModal(toastMessage: ModalMessage): void;
  removeModal(toastMessageId: number): void;
}
