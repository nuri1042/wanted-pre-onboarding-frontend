import "./App.css";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/"></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
