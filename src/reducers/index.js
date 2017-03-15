import { INIT_APP } from '../actions';

const initialState = {
  timelines: [{
    title: 'G',
    summary: 'asa'
  }, {
    title: 'H',
    summary: 'asdas'
  }]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case INIT_APP:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
