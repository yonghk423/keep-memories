import  { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import notificationReducer from './notificationReducer';
import SelectedReducer from './selectedReducer';
// ------로컬 스토리지 저장 코드 입니다.---------
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   // localStorage에 저장합니다.
//   storage: storage,

//   whitelist: ["ItemReducer"]
// };

const rootReducer = combineReducers({
        ItemReducer, notificationReducer,
         SelectedReducer,
});
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;