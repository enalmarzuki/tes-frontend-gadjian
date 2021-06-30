import { GET_USER_FAIL, GET_USER_START, GET_USER_SUCCESS } from "../type";

const initialState = {
  loading: false,
  page: 1,
  dataUser: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.page,
        dataUser: action.dataUser,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
