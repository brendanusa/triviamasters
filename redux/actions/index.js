const getText = () =>  {
  return {
    type: 'GET_TEXT'
  }
}

const getTextEnd = ({ text, error }) =>  {
  return {
    type: 'GET_TEXT_END',
    payload: {
      text,
      error,
    }
  }
}

export default {
  getText,
  getTextEnd
}