import { useSelector } from 'react-redux';
import Toast from './Toast';
import './NofiticationCenter.scss'

export interface notificationReducer {
    notificationReducer: any
}

function NofiticationCenter() {
  const state:any = useSelector<notificationReducer>(state => state.notificationReducer);
console.log(state);

  return <div className="notification-container">
    {
      state.notifications.map((n:any) =>
        <Toast key={n.uuid} text={n.message} dismissTime={n.dismissTime} />
      )
    }
  </div>
}

export default NofiticationCenter