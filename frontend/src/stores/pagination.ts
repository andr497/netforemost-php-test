import { atom } from "recoil";

export const paginationStore = atom<number>({
  key: "pagination-store",
  default: 1,
});
