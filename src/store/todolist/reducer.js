let defaultState = {
  name: '',
  list: []
};

const form = (state = defaultState, action = {}) => {
  switch(action.type) {
    case 'SAVE_DATA':
      return {...state, name: action.value};
    case 'CLEAR_DATA':
      return {...state, name: defaultState.name};
    case 'ADD_LIST':
      defaultState.list.push(action.value);
      return {...state, list: defaultState.list};
    case 'DEL_LIST':
      defaultState.list.splice(action.key, 1);
      return {...state, ...defaultState};
    default:
      return state;
  }
}

export {
  form
}