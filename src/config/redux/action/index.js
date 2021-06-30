import { Get } from "../../../services/Get";
import { GET_USER_START, GET_USER_SUCCESS } from "../type";

export const getUser =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    dispatch({ type: GET_USER_START });

    let listUsers = await Get("https://randomuser.me/api/?results=28");

    if (listUsers.status === 200) {
      dispatch({
        type: GET_USER_SUCCESS,
        page: 1,
        dataUser: listUsers.data.results,
      });
    }

    return listUsers.data.results;
  };
