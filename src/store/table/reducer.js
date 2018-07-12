import _ from 'lodash';

let defaultState = {
  list: []
};
const table = (state = defaultState, action = {}) => {
  switch(action.type) {
    case 'REQ_DATA':
      defaultState.list = action.data;
      return {...state, ...defaultState};
    case 'DEL_COLUMN':
      _.remove(defaultState.list, (item) => {
        return item.key === action.id;
      });
      return {...state, ...defaultState};
    default:
      return state;
  }
}

export {
  table
}