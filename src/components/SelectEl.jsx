/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GroupModal } from "./GroupModal";

export function SelectEl({ groups, setSelected, setGroups, isSave }) {
  const [selectedGroup, setSelectedGroup] = useState("가족");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isSave) {
      setSelectedGroup("가족");
    }
  }, [isSave]);

  return (
    <>
      <div className="select-el">
        <label>그룹</label>
        <select
          value={selectedGroup}
          onChange={(e) => {
            setSelected(e.target.value || "가족");
            setSelectedGroup(e.target.value || "가족");
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
