import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import './Todos.scss'

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Todos = (todos:any) => {  
  // console.log(todos);
  console.log(todos.todos.textBox)
  console.log(todos.todos.name)
  const todoss = todos.todos.textBox
  const name = todos.todos.name;

  // const todos:any = useSelector<ItemReducer>(state => state.ItemReducer);
  const dispatch = useDispatch();
  const onCreate = (text:any, id:any) => dispatch(addTodo(text, name));
  // const onCreateId = (id:any) => dispatch(addTodo(id));

  const [text, setText] = useState('');
  const onChange = (e:any) => setText(e.target.value);
  const onSubmit = (e:any) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, name);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form className='submitBox' onSubmit={onSubmit}>
        <input className='onText'
          value={text}
          placeholder=""
          onChange={onChange}
        />
        <button className='btn' type="submit">Add</button>
      </form>
      <TodoList todoss={todoss}/>
    </div>
  );
}
//-------------------------------------------------------------------------

const TodoList = React.memo(function TodoList(todoss:any) {
  // console.log(todoss);
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
  // console.log(todo.todo);  
  
  return (
    <div className='todo'>
      {todo.todo}
    </div>
  );
});


export default Todos;