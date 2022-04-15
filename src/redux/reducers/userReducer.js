const initialState = { name: "Mauricio", age: 30 };

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeUserName": {
      return { ...state, name: action.payload };
    }
    case "changeUserAge": {
      return { ...state, age: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default addUserReducer;
