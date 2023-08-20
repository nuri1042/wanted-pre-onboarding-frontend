import { useRef, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../auth/useAuth";
import { AuthStateContext } from "../auth/context";
import { Section, Div, Form, Input, Button } from "../styles/SigninStyle";

function Signin() {
  const navigate = useNavigate();
  const user = useContext(AuthStateContext);
  useEffect(() => {
    if (user) {
      navigate("/todo");
    }
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const signinBtn = useRef();

  useEffect(() => {
    if (inputs.email.includes("@") && inputs.password.length >= 8) {
      signinBtn.current.disabled = false;
    } else {
      signinBtn.current.disabled = true;
    }
  }, [inputs]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  const { signIn } = useAuth();
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios({
        url: "https://www.pre-onboarding-selection-task.shop/auth/signin",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: inputs.email,
          password: inputs.password,
        },
      });

      const token = res.data.access_token;
      signIn(token);
      if (res.status === 200) {
        alert("로그인되었습니다.");
        navigate("/todo");
      }
      navigate("/todo");
    } catch (error) {
      alert("로그인에 실패했습니다.");
    }
  }

  return (
    <Section>
      <Div>
        <p>로그인</p>
        <Form onSubmit={submitHandler}>
          <Input
            data-testid="email-input"
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            placeholder="email"
          />
          <Input
            data-testid="password-input"
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            placeholder="password"
          />
          <Button
            data-testid="signin-button"
            type="submit"
            ref={signinBtn}
            disabled
          >
            로그인
          </Button>
        </Form>
      </Div>
    </Section>
  );
}

export default Signin;
