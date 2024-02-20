import {configureStore} from '@reduxjs/toolkit'

const INCREMENT = "post/increment";

const initialState = {
  count: 0,
  name: "Hemant",
  age: 38,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

const store = configureStore({reducer});

store.subscribe(()=>{
  console.log("Store State",store.getState());
})

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });


export default store