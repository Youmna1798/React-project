const initialState = {
    favIds: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        console.log('add')
        return { favIds: [...state.favIds, action.payload] };
  
      case "REMOVE":
        console.log('in remove')
        return { favIds: state.favIds.filter((el) => el != action.payload) };
  
      default:
        return state;
    }
  }