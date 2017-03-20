import { INIT_APP, INIT_APP_SUCESS } from '../actions';

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
  console.log('main reducer');
  switch (action.type) {
    case INIT_APP:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case INIT_APP_SUCESS:
      console.log(action);
      return state;
    default:
      return state;
  }
}
