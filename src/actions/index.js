export const INIT_APP = 'INIT_APP';
export const INIT_APP_SUCESS = 'INIT_APP_SUCESS';
export const FETCH_TIMELINES = 'FETCH_TIMELINES';

export function initApp() {
  return { type: INIT_APP };
}

export function fetchTimelines() {
  return { type: FETCH_TIMELINES };
}

export function initAppSucess(people) {
  return { type: INIT_APP_SUCESS, people };
}
