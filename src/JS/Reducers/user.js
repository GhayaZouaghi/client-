import { USER_FAIL, USER_LOAD, USER_SUCC } from "../ActionsType/user";

const initState = {
  load: false,
  user: {},
  errors: [],
  isAuth: false,
};
const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOAD:
            return { ...state, load: true };
      case USER_SUCC:
        localStorage.setItem("token", payload.token)
        return { ...state, load: false, user: payload.user, isAuth: true };
        case USER_FAIL:
          return { ...state, load: false, errors:payload.errors, isAuth: false };
    
  
    default:
      return state;
  }
};

export default userReducer;
