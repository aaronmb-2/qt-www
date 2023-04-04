import { action, computed, observable, makeAutoObservable } from "mobx";

import { ITierService } from "./ITierService";
import { Tier } from "~/models/pricing/Tier";
import { Price } from "~/models/pricing/Price";
import { Frequency } from "~/models/pricing/Frequency";

export class TierService implements ITierService {
  /**
   * Class that holds all information regarding the Tiers, Pricing & Frequencies of the application.
   *
   * @remarks
   * This class is a so-called 'service', which (in this case), provides the overall tier, pricing & frequency information.
   * The TierService implements the ITierService
   *
   */
  tiers: Tier[] = [
    new Tier({
      id: 1,
      name: "pricing.tier_trader.name",
      href: "#",
      featured: false,
      price: new Price({ id: 1, monthly: 39, annually: 420 }),
      mainFeatures: [
        "pricing.tier_trader.backtesting",
        "pricing.tier_trader.optimizer",
        "pricing.tier_trader.unlimited",
        "pricing.tier_trader.code_editor",
        "pricing.tier_trader.workflow",
      ],
    }),
    new Tier({
      id: 2,
      name: "pricing.tier_trader_investor.name",
      href: "#",
      featured: true,
      price: new Price({ id: 2, monthly: 69, annually: 765 }),
      mainFeatures: [
        "pricing.tier_trader_investor.combined",
        "pricing.tier_trader_investor.trader",
        "pricing.tier_trader_investor.investor",
      ],
    }),
    new Tier({
      id: 3,
      name: "pricing.tier_investor.name",
      href: "#",
      featured: false,
      price: new Price({ id: 3, monthly: 32, annually: 375 }),
      mainFeatures: [
        "pricing.tier_investor.active_management",
        "pricing.tier_investor.advisor",
        "pricing.tier_investor.portfolio_management",
        "pricing.tier_investor.risk_management",
        "pricing.tier_investor.invest",
      ],
    }),
  ];

  frequencies: Frequency[] = [
    new Frequency({ id: 1, value: "monthly", label: "pricing.monthly" }),
    new Frequency({ id: 2, value: "annually", label: "pricing.annually" }),
  ];

  @observable
  currentTier = this.tiers[1];

  @observable
  currentFrequency = this.frequencies[0];

  @computed
  getCurrentTier(): Tier {
    return this.currentTier;
  }

  @computed
  getCurrentFrequency(): Frequency {
    return this.currentFrequency;
  }

  @action
  setCurrentTier(tier: Tier): void {
    this.currentTier = this.tiers[tier.id];
  }

  @action
  setCurrentFrequency(frequency: Frequency): void {
    this.currentFrequency = frequency;
  }
}

export const tierService = new TierService();
makeAutoObservable(tierService, {}, { autoBind: true });
