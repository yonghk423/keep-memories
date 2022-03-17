import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, RemoveText } from '../actions';
import './Todos.scss'

export interface ItemReducer {
        ItemReducer : Array<object>
}

const Todos = (todos:any) => {  
  console.log(todos)  
  const todoss:string = todos.todos.textBox
  console.log(todoss)
  const name:string = todos.todos.name;
  console.log(name);

  const dispatch = useDispatch();
  const onCreate = (text:string, name:string) => dispatch(addTodo(text, name));

  const [text, setText] = useState('');
  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, name);
    setText(''); // 인풋 초기화
    setTimeout(() => {
      window.location.reload();
    }, 2000)
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
  console.log(todoss);
  const dispatch = useDispatch();  
  const todosss = todoss.todoss;
  console.log(todoss);  

  const RemoveTextSetting = (todoId:number) => {
    console.log(todoId);
    dispatch(RemoveText(todoId))
    setTimeout(() => {
      window.location.reload();
    }, 1500)
  }
  

  return (
  todosss &&   
    <ul>
      {todosss.map((todo:any) => (
       <div key={todo.id}>
        {todo.text}
        {todo.text === '' ? null : <button onClick={() => RemoveTextSetting(todo.id)}>삭제</button>}
       </div> 
      ))}
    </ul>
  );
});

export default Todos;