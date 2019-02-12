const initialState = {
    checked: false
  }
 export const check = (state = initialState, action) => {
      switch (action.type){
          case 'CHECK_BOX':
              return {
                ...state,
                checked: !checked
              }
          default:
              return state
      }
  }

  export default check