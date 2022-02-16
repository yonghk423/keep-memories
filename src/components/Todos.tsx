import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import './Todos.scss'

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Todos = (todos:any) => {    
  const todoss:string = todos.todos.textBox
  const name:string = todos.todos.name;

  const dispatch = useDispatch();
  const onCreate = (text:string, name:string) => dispatch(addTodo(text, name));

  const [text, setText] = useState('');
  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, name);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form className='submitBox' onSubmit={onSubmit}>
        <textarea className='onText'
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
  return (
    <div className='todo'>
      {todo.todo}
    </div>
  );
});

export default Todos;