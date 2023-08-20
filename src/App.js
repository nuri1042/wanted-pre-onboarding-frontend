import Header from "./component/Header";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Main from "./component/Main";
import Todo from "./component/Todo";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/provider";

function App() {
  return (
    // Provider를 App Component에 연결해서 하위의 모든 component에서 로그인과 관련된 state 사용 가능
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
