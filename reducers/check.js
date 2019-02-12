const initialState = {
    check: false
  }
 export const check = (state = initialState, action) => {
      switch (action.type){
          case 'CHECK_BOX':
          console.warn("action done")
              return {
                  ...state,
                  check: !state.check,
              }        
          default:
              return state
      }
  }

  export default check