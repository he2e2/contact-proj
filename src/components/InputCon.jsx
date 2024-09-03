import { useSetRecoilState } from "recoil";

import { updatedState } from "@atoms";
import { InputEl } from "./InputEl";
import { SelectEl } from "./SelectEl";
import { useInputState } from "@features";

export function InputCon() {
  const {
    groups,
    nameError,
    callError,
    setGroups,
    setSelectedGroup,
    setName,
    setCall,
    setDetail,
    saveData,
  } = useInputState();

  const setIsUpdated = useSetRecoilState(updatedState);

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
      <button className="save-button" onClick={() => saveData(setIsUpdated)}>
        저장
      </button>
    </div>
  );
}
