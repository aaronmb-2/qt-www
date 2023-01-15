import { observable, action, computed, makeObservable } from "mobx";

export class NumberService {
  @observable
  count = 4;

  constructor() {
    makeObservable(this);
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }

  @computed
  get double() {
    return this.count * 2;
  }
}

export const numberService = new NumberService();
