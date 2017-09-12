export const SET_RESULTS = 'SET_RESULTS';

export function setResults(results) {
  results.sort((a,b) => a.rating < b.rating ? 1 : -1);
  results.slice(0, 18);
  return {
    type: SET_RESULTS,
    results,
  };
}
