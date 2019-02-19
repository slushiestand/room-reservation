
export const submit = (state = [], action) => {
    switch (action.type){
          case 'SUBMIT':
              return {
                ...state,
                theState: action.theState
              }
        default:
            return {...state}
    }
}

export default submit