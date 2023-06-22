import { ThunkDispatch } from 'redux-thunk';

import { handleSearch } from '../../backend/backendServices';
import { GET_ITEMS, ITEMS_ERROR, LOADING } from '../types/types';
import { SearchAction, SearchState } from '../../interfaces/interfaces';



export const getSearchAction = (params: { searchQuery: string }) => async (dispatch: ThunkDispatch<SearchState, null, SearchAction>) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await handleSearch(params.searchQuery);

    dispatch({
      type: GET_ITEMS,
      payload: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ITEMS_ERROR,
    });
  }
};
