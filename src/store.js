const redux = require("redux");
const createstore = redux.createStore();

const BUY_CAKES = "BUY_CAKES";

function buycakes() {
  return {
    type: BUY_CAKES,
    INFO: "please buy cakes"
  };
}

const initial_state = {
  num_of_cakes: 10
};

function reducer(state = initial_state, action) {
  switch (action.type) {
    case BUY_CAKES:
      return {
        num_of_cakes: state.num_of_cakes + 1
      };
  }
}

const store = createstore(reducer);
console.log("initial state", store.getState());
store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(buycakes());
store.dispatch(buycakes());
store.dispatch(buycakes());
