import { useState } from "react";
import { GroupModal } from "./GroupModal";

export function SelectEl() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="select-el">
        <label>그룹</label>
        <select>
          <option>가족</option>
          <option>친구</option>
          <option>직장</option>
          <option>스터디</option>
        </select>
        <button onClick={() => setIsModal((prev) => !prev)}>조직추가</button>
      </div>
      {isModal && <GroupModal />}
    </>
  );
}
