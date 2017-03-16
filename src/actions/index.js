export const INIT_APP = 'INIT_APP';
export const FETCH_TIMELINES = 'FETCH_TIMELINES';

export function initApp() {
  return { type: INIT_APP };
}

export function fetchTimelines() {
  return { type: FETCH_TIMELINES };
}
