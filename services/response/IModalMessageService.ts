import { ModalMessage } from "~/models/response/ModalMessage";

export interface IModalMessageService {
  modalMessagesQueue: ModalMessage[];

  displayModelMessage: ModalMessage;
  showModalMessage: boolean;

  addModal(toastMessage: ModalMessage): void;
  removeModal(toastMessageId: number): void;
}
