const reqData = (data) => {
  return {
    type: 'REQ_DATA',
    data
  }
}

const delColumn = (id) => {
  return {
    type: 'DEL_COLUMN',
    id
  }
}

export {
  reqData,
  delColumn
}