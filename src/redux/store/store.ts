import { createStore, combineReducers, compose, applyMiddleware, Store } from "redux";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";
import searchReducer from "../reducers/searchReducer";
import { RootState } from "../../interfaces/interfaces";



const rootReducer = combineReducers<RootState>({
  search: searchReducer,
});

type RootAction = any;

export type AppDispatch = ThunkDispatch<RootState, undefined, RootAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  RootAction
>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(): Store<RootState, RootAction> {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
