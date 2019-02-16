const initialState = {
    adults: 0,
    children: 0

  }
 export const occupancy = (state = initialState, action) => {
      switch (action.type){
            case 'NUMBER_ADULTS':
            console.warn("action done")
                return {
                    ...state,
                    adults: action.selectValue,
                }
            case 'NUMBER_CHILDREN':
            console.warn("action done")
                return {
                    ...state,
                    children: action.selectValue,
                }                
            
          default:
              return state
      }
  }

  export default occupancy