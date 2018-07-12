const saveData = (value) => {
  return {
    type: 'SAVE_DATA',
    value
  }
}

const clearData = (value) => {
  return {
    type: 'CLEAR_DATA',
    value
  }
}

const addToList = (value) => {
  return {
    type: 'ADD_LIST',
    value
  }
}

const delFromList = (key) => {
  return {
    type: 'DEL_LIST',
    key
  }
}

export {
  saveData,
  clearData,
  addToList,
  delFromList
}
