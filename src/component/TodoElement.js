import axios from "axios";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  Li,
  Label,
  Button,
  Span,
  Checkbox,
  Input,
} from "../styles/TodoElementStyle";

function TodoElement({ data, getData }) {
  const token = localStorage.getItem("JWT");
  const checked = useRef();

  // 수정할 텍스트, 체크박스
  const [inputs, setInputs] = useState({
    isCompleted: data.isCompleted, // 체크박스
    todo: data.todo, // 수정할 내용 입력받을 변수
  });
  const [isEditmode, setIsEditmode] = useState(false); // 리스트가 edit 모드인지 아닌지 판별하기 위함
  const [changedInput, setChangedInput] = useState(""); // 수정 전 내용 임시저장하기 위함

  // 수정할 내용 입력 후에 '제출'버튼이 아닌 '취소' 버튼 클릭 시 이전 내용 불러옴
  function cancelEdit() {
    setInputs(changedInput);
    setIsEditmode(!isEditmode);
  }
  // 수정한 내용 업데이트
  async function isUpdateHandler() {
    updateTodo(inputs);
    setIsEditmode(!isEditmode);
  }
  // edit 모드에서 새로운 내용 입력받아 input state 변경
  function changeHandler(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체 복사
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  }

  // 수정 버튼 클릭 후 axios 요청 통해 바뀐 내용 반영
  async function updateTodo(enteredData) {
    try {
      await axios({
        url: `https://www.pre-onboarding-selection-task.shop/todos/${data.id}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: enteredData,
      });
      setChangedInput(enteredData);
    } catch (error) {
      alert("업데이트에 실패했습니다.");
    }
  }

  // 삭제 버튼 구현
  async function deleteHandler() {
    try {
      const res = await axios({
        url: `https://www.pre-onboarding-selection-task.shop/todos/${data.id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 204) {
        getData();
      }
    } catch (error) {
      alert("[ERROR] 정상적으로 삭제되지 않았습니다.");
    }
  }

  // 체크박스로 완료 여부 표시
  useEffect(() => {
    if (inputs.isCompleted) {
      checked.current.checked = true;
    } else {
      checked.current.checked = false;
    }
  }, [inputs]);

  // 체크박스로 완료 여부 표시
  async function isCompletedHandler() {
    setInputs({ ...inputs, isCompleted: !inputs.isCompleted });
  }

  return (
    <Li>
      <Label>
        <Checkbox type="checkbox" onChange={isCompletedHandler} ref={checked} />
        {isEditmode ? ( // 수정 모드일 때
          <div>
            <Input
              data-testid="modify-input"
              value={inputs.todo}
              name="todo"
              onChange={changeHandler}
            />
            <Button data-testid="submit-button" onClick={isUpdateHandler}>
              제출
            </Button>
            <Button data-testid="cancel-button" onClick={cancelEdit}>
              취소
            </Button>
          </div>
        ) : (
          // 수정 모드 아닐 때
          <div>
            <Span>{inputs.todo}</Span>
            <Button data-testid="modify-button" onClick={isUpdateHandler}>
              수정
            </Button>
            <Button data-testid="delete-button" onClick={deleteHandler}>
              삭제
            </Button>
          </div>
        )}
      </Label>
    </Li>
  );
}

export default TodoElement;
