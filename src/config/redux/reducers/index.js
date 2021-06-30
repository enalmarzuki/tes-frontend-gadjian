import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";

const userPersistConfig = {
  key: "user",
  storage: storage,
  blacklist: ["loading"],
};

const rootReducer = combineReducers({
  userReducer: persistReducer(userPersistConfig, user),
});

export default rootReducer;
