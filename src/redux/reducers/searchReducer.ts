import { SearchAction, SearchState } from "../../interfaces/interfaces";


const dataInit = {
  loading: false,
  data: [],
};


export default function searchReducer(
  state: SearchState = dataInit,
  action: SearchAction
): SearchState {
  const items = {
    LOADING: { ...state, loading: true },
    ITEMS_ERROR: { ...dataInit },
    GET_ITEMS: { loading: false, data: action.payload },
  };
  return items[action.type] ?? { ...state };
}
