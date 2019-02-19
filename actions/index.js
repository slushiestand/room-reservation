export function check2() {
    return {
      type: "CHECK_BOX2"
    }
  } 

  export function check3() {
    return {
      type: "CHECK_BOX3"
    }
  } 

  export function check4() {
    return {
      type: "CHECK_BOX4"
    }
  } 

  export function uncheck() {
    return {
      type: "UNCHECK_BOXES34",
    }
  } 

  export function uncheck4() {
    return {
      type: "UNCHECK_BOX4"
    }
  } 

  export function adults(selectValue, room) {
    return {
      type: `NUMBER_ADULTS_${room}`,
      selectValue
    }
  } 

  export function children(selectValue, room) {
    return {
      type: `NUMBER_CHILDREN_${room}`,
      selectValue
    }
  }
  
  export function submit(theState) {
    return {
      type: "SUBMIT", 
      theState
    }
  }