import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import TodoElement from './TodoElement';

function TodoList() {
  const token = localStorage.getItem('JWT');
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(null);

  const getData = useCallback(async () => {
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
  });

  useEffect(() => {
    if (!localStorage.getItem('JWT')) {
      alert('로그인 후 이용해주세요.');
      navigate('/signin');
    }
    getData();
  }, [navigate]);

  function changeHandler(e) {
    setInput(e.target.value);
  }

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
    } catch (error) {
      alert('정상적으로 등록되지 않았습니다.');
    }
  }

  return (
    <Section>
      <Div>
        <P>Todo List</P>
        <Form onSubmit={submitHandler}>
          <Input data-testid='new-todo-input' placeholder='내용을 입력해주세요' value={input} onChange={changeHandler} />
          <Button data-testid='new-todo-add-button'>추가</Button>
        </Form>
        <List>{todoList && todoList.map((element) => <TodoElement key={element.id} data={element} getData={getData} />)}</List>
      </Div>
    </Section>
  );
}

const Section = styled.main`
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  // min-height: 20em;
  margin-top: 5em;
  border: 1px solid;
`;
const P = styled.p`
  font-size: 17px;
`;
const Form = styled.form`
  display: flex;
`;
const Input = styled.input`
  border: 1px solid ;
  padding: 1em;
  margin-right: 0.5em;
  }
`;
const Button = styled.button`
  border: none;
  background: inherit;
  color: #000;
`;
const List = styled.ul`
  width: 60%;
`;

export default TodoList;
