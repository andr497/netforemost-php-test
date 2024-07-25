import { atom } from "recoil";

import { IAccommodationFilterParams } from "@/interfaces/accommodation";

export const accommodationsFilterStore = atom<IAccommodationFilterParams>({
  key: "accommodations-filter-store",
  default: {
    filter_distance: false,
  },
});
