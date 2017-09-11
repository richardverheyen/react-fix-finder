export const SET_CAFEID = 'SET_CAFEID';

export function setSelectedCafe(cafeId) {
  return {
    type: SET_CAFEID,
    cafeId,
  };
}
