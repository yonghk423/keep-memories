import { ENQUEUE_NOTIFICATION, DEQUEUE_NOTIFICATION } from "../actions/index";
import { initialState } from '../asset/data'

const notificationReducer = (state:any = initialState, action:any) => {

  switch (action.type) {
    case ENQUEUE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload]
      })
    case DEQUEUE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: state.notifications.slice(1)
      })
    default:
      return state;
  }
}

export default notificationReducer;
