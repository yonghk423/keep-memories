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
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, name);
    setText(''); // 인풋 초기화
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  };

  
  return (
    <>
      <form className='submitBox' onSubmit={onSubmit}>
        <textarea className='onText'
          value={text}
          placeholder=""
          onChange={onChange}
        />
        <button className='btn' type="submit">글 남기기</button>
      </form>
      <TodoList todoss={todoss}/>
    </>
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
    <ul className='textList'>
      {todosss.map((todo:any) => (
       <div className='todoTextBox' key={todo.id}>
        <div className='todoText'>{todo.text}</div>
        {todo.text === '' ? null :  
        <div className='todoDelete'>
          <button className='todoBtn' onClick={() => RemoveTextSetting(todo.id)}>삭제</button>
        </div>
        }
      </div>       
      ))}
    </ul>
  );
});

export default Todos;