import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Router } from "react-router-dom";

const FormWrapper = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & input {
    height: 40px;
    padding: 7px;
    font-size: 20px;
  }
  & button {
    font-size: 17px;
    font-weight: bold;
    padding: 10px;
  }
`;
const Container = styled.div`
  border: 1px solid #000;

  width: 500px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const SignForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [emailValidation, setemailValidation] = useState(true);
  const [pwdValidation, setpwdValidation] = useState(true);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // const onChangeEmail = useCallback((e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   const emailRegex =
  //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  //   setEmail(value);

  //   if (value === " ") {
  //     setEmailMsg("이메일을 입력해주세요.");
  //     setemailValidation(!emailValidation);
  //   } else if (!emailRegex.test(value)) {
  //     setEmailMsg("이메일 형식이 틀렸어요. 다시 확인해주세요.");
  //     setemailValidation(!emailValidation);
  //     return;
  //   } else {
  //     setEmailMsg("");
  //     setemailValidation(emailValidation);
  //   }
  // }, []);

  // const onChangePassword = useCallback((e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

  //   setPassword(value);

  //   if (value === " ") {
  //     setPwdMsg("비밀번호를 입력해주세요.");
  //     setpwdValidation(!pwdValidation);
  //   } else if (!passwordRegex.test(e.target.value)) {
  //     setPwdMsg("비밀번호는 8자 이상으로 설정해주세요.");
  //     setpwdValidation(!pwdValidation);
  //   } else {
  //     setPwdMsg("");
  //     setpwdValidation(pwdValidation);
  //   }
  // });

  const onSubmitForm = async () => {
    await axios({
      method: "post",
      url: "https://www.pre-onboarding-selection-task.shop/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: inputs.email,
        password: inputs.password,
      },
    })
      .then((response) => {
        // if (emailValidation && pwdValidation) {
        if (response.status === 201) {
          localStorage.setItem(
            "signupResponseData",
            JSON.stringify(response.data)
          );
          console.log(response);
          alert("회원가입이 완료되었습니다.");
          Router.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <FormWrapper onSubmit={onSubmitForm}>
          <input
            type="email"
            placeholder="email"
            data-testid="email-input"
            required
            value={inputs.email}
            onChange={onChangeInput}
          />
          {/* <p>{emailMsg}</p> */}
          <input
            type="password"
            placeholder="password"
            data-testid="password-input"
            required
            value={inputs.password}
            onChange={onChangeInput}
          />
          {/* <p>{pwdMsg}</p> */}
          <button
            data-testid="signup-button"
            type="submit"
            // onClick={onSubmitForm}
          >
            회원가입
          </button>
        </FormWrapper>
      </Container>
    </>
  );
};
export default SignForm;
