export const login = (state = [], action) => {
    switch (action.type) {
      case 'SAMPLE_ACTION':{
          console.log("there");
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]}

       default:
        return state
    }
  }

   export default login