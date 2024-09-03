/* eslint-disable react/prop-types */
import { useState } from "react";
import { GroupModal } from "./GroupModal";

export function SelectEl({ groups, setSelected, setGroups }) {
  const [isModal, setIsModal] = useState(false);
  setSelected();
  return (
    <>
      <div className="select-el">
        <label>그룹</label>
        <select
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {groups.map((group) => {
            return <option key={group}>{group}</option>;
          })}
        </select>
        <button onClick={() => setIsModal((prev) => !prev)}>조직추가</button>
      </div>
      {isModal && (
        <GroupModal
          groups={groups}
          setGroups={setGroups}
          setIsModal={setIsModal}
        />
      )}
    </>
  );
}
