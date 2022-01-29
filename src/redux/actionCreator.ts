import { GET_BOOKS, BOOKS_ERROR } from "./actionsTypes";
import api from "../api/index";
import { response } from "../api/interfaces";

export const getBooks = (query: string) => async (dispatch: any) => {
  try {
    const URI = 'search';
    const params = {
      query: query
    };
    const response = await api<response>("GET", URI, params);
    dispatch({
      type: GET_BOOKS,
      payload: response.data.hits
    })
  }catch(e){
    dispatch( {
      type: BOOKS_ERROR,
      payload: console.log(e),
  })
  }
}