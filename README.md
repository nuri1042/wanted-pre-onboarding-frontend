# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 지원자 - 김누리
<br/>

### 사용 라이브러리
- React Router
- HTTP Client : Axios
- Styling : Styled-Components
<br/>

### 프로젝트 구조

```
📦src
 ┣ 📂auth
 ┃ ┣ 📜context.js
 ┃ ┣ 📜provider.js
 ┃ ┗ 📜useAuth.js
 ┣ 📂component
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜Signin.js
 ┃ ┣ 📜Signup.js
 ┃ ┣ 📜Todo.js
 ┃ ┗ 📜TodoElement.js
 ┣ 📂styles
 ┃ ┣ 📜HeaderStyle.js
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜SigninStyle.js
 ┃ ┣ 📜SignupStyle.js
 ┃ ┣ 📜TodoElementStyle.js
 ┃ ┗ 📜TodoStyle.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
```

### 프로젝트 설명

#### App.js
- 로그인 상태를 전역으로 관리하는 Context Provider로 감싸진 가장 상위의 component 입니다.
- React Router 를 이용해 Routing을 구현하였습니다.
- 프로젝트 전역에 공통적으로 적용할 Header 컴포넌트를 적용하였습니다.

#### 📂component/Signin.js
- '/signin' 경로에서 보여지는 로그인 페이지입니다.
- Context API로 전역에서 로그인 데이터를 관리, 로그인 완료 시에 '/todo' 경로로 이동합니다.
- 이메일과 비밀번호의 유효성 검사를 만족하면 로그인 버튼을 활성화시킵니다.
- axios 요청 후에 결과값을 Context에서 생성한 SignIn() 함수로 전달, localStorage.setItem()으로 토큰을 저장합니다.

#### 📂component/Signup.js
- '/signup' 경로에서 보여지는 회원가입 페이지입니다.

#### 📂component/Todo.js
- '/todo' 경로에서 보여지는 투두리스트 페이지입니다.
- 로그인 되어있지 않은 상태에서 todo 페이지에 접근하는 것을 방지하기 위해 localStorage에 JWT가 있는지 여부를 확인합니다.
- axios 요청을 통해 저장된 Todo-list를 불러오고, 사용자가 새로 입력한 Todo를 저장합니다.
- state에 저장된 todoList는 TodoElement 컴포넌트를 이용해 렌더링합니다.

#### 📂component/TodoElement.js
- state(isEditmode)로 list가 수정모드인지 아닌지 판단하여 사용자에게 '제출/취소' 버튼 또는 '수정/삭제' 버튼이 보여집니다.
- axios 요청을 통해 수정사항을 반영하거나 삭제합니다.
- 체크박스를 클릭하면 state(isCompleted)의 상태를 변경하여 Todo의 완료여부를 표시합니다.
<br />

## 프로젝트 실행 방법

```
npm i
npm start
```

  
## 데모 영상


https://github.com/nuri1042/wanted-pre-onboarding-frontend/assets/19181088/15ffb62c-1586-4657-98e9-cc5d0d9ab2b0

