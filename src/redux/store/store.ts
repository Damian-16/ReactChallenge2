import { createStore, combineReducers, compose, applyMiddleware, Store } from "redux";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";

interface RootState {}

const rootReducer = combineReducers<RootState>({});

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
