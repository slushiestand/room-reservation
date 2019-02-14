const initialState = {
    check2: false,
    check3: false,
    check4: false,
  }
 export const check = (state = initialState, action) => {
      switch (action.type){
            case 'CHECK_BOX2':
            console.warn("action done")
                return {
                    ...state,
                    check2: !state.check2,
                }
            case 'CHECK_BOX3':
                return {
                   ...state,
                   check3: !state.check3,
                   check2: !state.check3
               }
            case 'CHECK_BOX4':
                return {
                    ...state,
                    check4: !state.check4,
                    check3: !state.check4,
                    check2: !state.check4,
                
                }
            case 'UNCHECK_BOX':
            return {
                ...state,
                check2: !state.check2,
                check3: false,
                check4: false,
            
            }          
          default:
              return state
      }
  }

  export default check