import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions';


export interface ItemReducer {
        ItemReducer : Array<object>
}

const Todos = (todos:any) => {  
  // console.log(todos);
  console.log(todos.todos.textBox)
  console.log(todos.todos.id)
  const todoss = todos.todos.textBox
  const id = todos.todos.id;

  // const todos:any = useSelector<ItemReducer>(state => state.ItemReducer);
  const dispatch = useDispatch();
  const onCreate = (text:any, id:any) => dispatch(addTodo(text, id));
  // const onCreateId = (id:any) => dispatch(addTodo(id));

  const [text, setText] = useState('');
  const onChange = (e:any) => setText(e.target.value);
  const onSubmit = (e:any) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, id);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todoss={todoss}/>
    </div>
  );
}
//-------------------------------------------------------------------------

const TodoList = React.memo(function TodoList(todoss:any) {
  console.log(todoss);
  // console.log(todoss.onCreate);
  // console.log(todoss.todoss);
  
  const todosss = todoss.todoss;
  
  return (
    <ul>
      {todosss.map((todo:any) => (
        <TodoItem key={todo.id} todo={todo.text} />
      ))}
    </ul>
  );
});

//-------------------------------------------------------------------------
const TodoItem = React.memo(function TodoItem(todo:any) {
  console.log(todo.todo);  
  
  return (
    <div>
      {todo.todo}
    </div>
  );
});


export default Todos;