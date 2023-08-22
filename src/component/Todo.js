import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import TodoElement from './TodoElement';
import { Section, Div, P, Form, Input, Button, List } from '../styles/TodoStyle.js';

function TodoList() {
  const token = localStorage.getItem('JWT');
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(null);

  const todoInput = useRef();

  function InputChangeHandler(e) {
    setInput(e.target.value);
  }

  // Todo List 불러오기
  const getData = usecallback(async () => {
    try {
      const res = await axios({
        url: 'https://www.pre-onboarding-selection-task.shop/todos',
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setTodoList(res.data);
      }
    } catch (error) {
      alert('리스트 불러오기 실패');
    }
  }, []);
  // 로그인 되어있지 않은 상태에서 todo 페이지에 접근 시 alert 표출
  useEffect(() => {
    if (!localStorage.getItem('JWT')) {
      alert('로그인 후 이용해주세요.');
      navigate('/signin');
    }
    getData();
  }, [navigate, getData]);

  // List에 새로운 Todo 추가
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios({
        url: 'https://www.pre-onboarding-selection-task.shop/todos',
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          todo: input,
        },
      });

      if (res.status === 201) {
        setTodoList([...todoList, res.data]);
      }
      setInput('');
      todoInput.current.focus();
    } catch (error) {
      alert('등록에 실패했습니다.');
    }
  }

  return (
    <Section>
      <Div>
        <P>Todo List</P>
        <Form onSubmit={submitHandler}>
          <Input data-testid='new-todo-input' placeholder='내용을 입력해주세요' value={input} onChange={InputChangeHandler} ref={todoInput} />
          <Button data-testid='new-todo-add-button'>추가</Button>
        </Form>
        <List>{todoList && todoList.map((element) => <TodoElement key={element.id} data={element} getData={getData} />)}</List>
      </Div>
    </Section>
  );
}

export default TodoList;
