import { createStore } from 'redux';

const initialState = {
  persistentData: '', // Add any other initial state properties as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSISTENT_DATA':
      return { ...state, persistentData: action.payload };
    default:
      return state;
  }
};

const Store = createStore(rootReducer);

export default Store;
