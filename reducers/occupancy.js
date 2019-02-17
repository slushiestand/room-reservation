const initialState = {
    adults: 0,
    children: 0

  }
function occupancyOfRoom(room = ''){
     return function occupancy(state = initialState, action) {
        switch (action.type){
            case `NUMBER_ADULTS_${room}`:
                console.warn('adultsreducer')
                return {
                    ...state,
                    adults: action.selectValue
                }
            case `NUMBER_CHILDREN_${room}`:
                return {
                    ...state,
                    children: action.selectValue
                }                
            
          default:
              return state
     }
    }
  }

  export default occupancyOfRoom