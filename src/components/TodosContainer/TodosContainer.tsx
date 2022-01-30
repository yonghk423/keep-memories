import { useSelector, useDispatch } from 'react-redux';
import Todos from '../TodosContainer/Todos';
import { addTodo } from '../../actions/index';

export interface ItemReducer {
        ItemReducer : Array<object>
}

export interface DataSetting {
    textBox: [{
        id:number;
        text:string;
    }]
}

const TodosContainer = ()  => {
  const todos:any = useSelector<ItemReducer>(state => state.ItemReducer);
  const dispatch = useDispatch();
  const onCreate = (text:any) => dispatch(addTodo(text));

  return (
    <>
      <Todos todos={todos.textBox} onCreate={onCreate} />
    </>
  )
}

export default TodosContainer;