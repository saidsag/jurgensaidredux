export function reducer (state = {}, action){
  const {inventory} = state;
  switch (action.type) {
    case 'ADD_TO_CART':
       return {
         ...state,

       }


    default:
      return state;

  }
}