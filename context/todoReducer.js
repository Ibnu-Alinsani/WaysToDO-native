import { Settings } from "react-native";

export default (state, { type, payload }) => {
  switch (type) {
    case "GET_TODO":
      return {
        ...state,
        loading: false,
        todo: payload,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: payload,
      };

    case "CREATE_CATEGORY":
      return {
        ...state,
        category: [payload, ...state.category],
      };

    case "CREATE_TODO":
      return {
        ...state,
        user: {
          ...state.user,
          list: [...state.user.list, payload],
        },
      };

    case "DO_LIST":
      return {
        ...state,
        user: {
          ...state.user,
          list: updatedArray(state.user.list, payload.id, payload.done),
        },
      };

    case "FIND_CATEGORY":
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};

function updatedArray(arr, i, upd) {
  return arr.map((e, idx) => {
    if (idx === i) {
      return {
        ...e,
        ...upd,
      };
    }

    return e;
  });
}
