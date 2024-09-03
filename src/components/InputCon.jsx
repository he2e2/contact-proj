import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { updatedState } from "@atoms";
import { InputEl } from "./InputEl";
import { SelectEl } from "./SelectEl";
import { validateCall, validateName, DEFAULT_GROUPS } from "@shared";

export function InputCon() {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("group")) || DEFAULT_GROUPS
  );
  const [selectedGroup, setSelectedGroup] = useState("가족");
  const [name, setName] = useState("");
  const [call, setCall] = useState("");
  const [detail, setDetail] = useState("");

  const [nameError, setNameError] = useState("");
  const [callError, setCallError] = useState("");

  const setIsUpdated = useSetRecoilState(updatedState);

  const saveData = () => {
    if (checkDuplicate()) {
      alert("이미 같은 이름의 연락처가 존재합니다.");
      return;
    }

    if (validateName(name) || validateCall(call)) {
      setNameError(validateName(name));
      setCallError(validateCall(call));
      return;
    }

    const data = {
      name: name,
      call: call,
      group: selectedGroup,
      detail: detail,
    };
    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];
    localStorage.setItem("contactList", JSON.stringify([data, ...prevList]));

    setIsUpdated((prev) => !prev);
  };

  const checkDuplicate = () => {
    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];

    return prevList.some((item) => item.name === name);
  };

  return (
    <div className="input-con">
      <InputEl label="이름" name="name" set={setName} errorText={nameError} />
      <InputEl
        label="전화번호"
        name="call"
        set={setCall}
        errorText={callError}
      />
      <SelectEl
        groups={groups}
        setSelected={setSelectedGroup}
        setGroups={setGroups}
      />
      <InputEl label="간단한기록" name="detail" set={setDetail} />
      <button className="save-button" onClick={saveData}>
        저장
      </button>
    </div>
  );
}
