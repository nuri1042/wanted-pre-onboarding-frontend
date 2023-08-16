import { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { AuthStateContext } from '../auth/context';

function Signup() {
  const navigate = useNavigate();
  const user = useContext(AuthStateContext);
  useEffect(() => {
    if (user) {
      navigate('/todo');
    }
  });

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const signinBtn = useRef();

  useEffect(() => {
    if (inputs.email.includes('@') && inputs.password.length >= 8) {
      signinBtn.current.disabled = false;
    } else {
      signinBtn.current.disabled = true;
    }
  }, [inputs]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios({
        url: 'https://www.pre-onboarding-selection-task.shop/auth/signup',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      if (res.status === 201) {
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      }
    } catch (error) {
      alert('회원가입에 실패했습니다.');
    }
  }

  return (
    <Section>
      <Div>
        <p>회원가입</p>
        <Form onSubmit={submitHandler}>
          <Input data-testid='email-input' type='email' name='email' value={inputs.email} onChange={changeHandler} placeholder='email' />
          <Input data-testid='password-input' type='password' name='password' value={inputs.password} onChange={changeHandler} placeholder='password' />
          <Button data-testid='signup-button' type='submit' ref={signinBtn} disabled>
            회원가입
          </Button>
        </Form>
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
  width: 40%;
  min-height: 15em;
  margin-top: 5em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid;
  padding: 1em;
  margin: 0.5em 0;
  width: 20vw;
`;
const Button = styled.button`
  margin-top: 0.5em;
  color: #000;
  width: 10em;
  height: 3em;
  cursor: pointer;
`;

export default Signup;
