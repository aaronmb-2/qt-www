import { IBaseData } from "../base/IBaseData";

export interface IPrice extends IBaseData<IPrice>{
    monthly: number;
    annually: number;

    getMonthlyPrice(): string;
    getAnnuallyPrice(): string;
    getCurrentPrice(period: string): string;
}
