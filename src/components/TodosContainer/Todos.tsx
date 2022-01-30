import React, { useState } from 'react';

function Todos(todos:any) {  
  const onCreates = todos.onCreate  
  const todoss = todos.todos;
  
  const [text, setText] = useState('');
  const onChange = (e:any) => setText(e.target.value);
  const onSubmit = (e:any) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreates(text);
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
      <TodoList todoss={todoss} />
    </div>
  );
}
//-------------------------------------------------------------------------

const TodoList = React.memo(function TodoList(todoss:any) {
  console.log(todoss.todoss);
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
    <div>
      {todo.todo}
    </div>
  );
});


export default Todos;