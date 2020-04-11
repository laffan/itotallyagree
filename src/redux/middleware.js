import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const logger = store => next => action => {
  console.group(action.type);
  console.log("The action:" + action);

  const result = next(action); // same as dispatch if last in chain.

  console.log("The new state: ", store.getState());
  console.groupEnd();

  return result;
};


export default applyMiddleware( thunk, logger );