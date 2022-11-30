import { createSelector } from "@reduxjs/toolkit";

export const selectProductState = (rootState) => rootState["products"];

export const selectProducts = createSelector(
  selectProductState,
  (s) => s.products
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (s) => s.loading
);