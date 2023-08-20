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
  const [isEditmode, setIsEditmode] = useState(false); // list가 수정모드인지 아닌지 판별
  const [changedInput, setChangedInput] = useState(""); // 수정할 내용 입력 후에 취소 버튼 클릭 시 이전 내용 불러오기 위해 이전 내용 저장

  // 수정할 내용 입력 후에 취소 버튼 클릭 시 이전 내용 불러옴
  function cancelEdit() {
    setInputs(changedInput);
    setIsEditmode(!isEditmode);
  }
  // todo 내용 수정
  async function isUpdateHandler() {
    updateTodo(inputs);
    setIsEditmode(!isEditmode);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체 복사
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  }

  // 수정 버튼 구현
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

  // 체크박스 통해 완료 여부 수정
  useEffect(() => {
    if (inputs.isCompleted) {
      checked.current.checked = true;
    } else {
      checked.current.checked = false;
    }
  }, [inputs]);

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
