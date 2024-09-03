import { useState } from "react";

import { InputEl } from "./InputEl";
import { SelectEl } from "./SelectEl";

const DEFAULT_GROUPS = ["가족", "친구", "직장", "스터디"];

export function InputCon() {
  const [groups, setGroups] = useState(DEFAULT_GROUPS);
  const [selectedGroup, setSelectedGroup] = useState("가족");
  const [name, setName] = useState("");
  const [call, setCall] = useState("");
  const [detail, setDetail] = useState("");

  const [isSave, setIsSave] = useState(false);

  const saveData = () => {
    const data = {
      name: name,
      call: call,
      group: selectedGroup,
      detail: detail,
    };
    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];
    localStorage.setItem("contactList", JSON.stringify([data, ...prevList]));
    setIsSave(true);
  };

  return (
    <div className="input-con">
      <InputEl label="이름" name="name" set={setName} isSave={isSave} />
      <InputEl label="전화번호" name="call" set={setCall} isSave={isSave} />
      <SelectEl
        groups={groups}
        setSelected={setSelectedGroup}
        setGroups={setGroups}
        isSave={isSave}
      />
      <InputEl
        label="간단한기록"
        name="detail"
        set={setDetail}
        isSave={isSave}
      />
      <button className="save-button" onClick={saveData}>
        저장
      </button>
    </div>
  );
}
