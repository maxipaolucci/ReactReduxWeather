import { FETCH_WEATHER} from '../actions/index';

export default function(state = [] /* we want an array as our state for this app */, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //is like doing state.concat[ action.payload.data] using ES6. This returns a new array and we do not mutate the state
  };
  
  return state;
}