export const SET_SELECTED_CAFE = 'SET_SELECTED_CAFE';

export function setSelectedCafe(selectedCafe) {
  return {
    type: SET_SELECTED_CAFE,
    selectedCafe,
  };
}
