import { Frequency } from "~/models/pricing/Frequency";
import { Tier } from "~/models/pricing/Tier";

export interface ITierService {
  tiers: Tier[];
  currentTier: Tier;
  getCurrentTier(): Tier;
  setCurrentTier(tier: Tier): void;

  frequencies: Frequency[];
  currentFrequency: Frequency;
  getCurrentFrequency(): Frequency;
  setCurrentFrequency(frequecy: Frequency): void;
}
