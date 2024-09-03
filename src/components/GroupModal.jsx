/* eslint-disable react/prop-types */
import { useState } from "react";

export function GroupModal({ groups, setGroups, setIsModal }) {
  const [newGroup, setNewGroup] = useState("");

  const addNewGroup = () => {
    if (newGroup.trim() === "") return;

    const updatedGroups = [...groups, newGroup];
    localStorage.setItem("group", JSON.stringify(updatedGroups));
    setGroups(updatedGroups);
    setNewGroup("");
  };

  return (
    <div className="group-wrapper">
      <button
        className="close-button"
        onClick={() => {
          setIsModal(false);
        }}
      >
        닫기
      </button>
      <section className="group-modal">
        <h2>그룹 관리</h2>
        <ul>
          {groups.map((group) => {
            return (
              <GroupItem
                key={group}
                group={group}
                groups={groups}
                setGroups={setGroups}
              />
            );
          })}
        </ul>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="새 그룹 이름"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <button onClick={addNewGroup}>추가</button>
        </div>
      </section>
    </div>
  );
}

function GroupItem({ group, groups, setGroups }) {
  const removeGroup = () => {
    const updatedGroups = groups.filter((item) => item !== group);
    localStorage.setItem("group", JSON.stringify(updatedGroups));
    setGroups(updatedGroups);
  };
  return (
    <li className="group-item">
      <span>{group}</span>
      <i className="fa-solid fa-x" onClick={removeGroup}></i>
    </li>
  );
}
