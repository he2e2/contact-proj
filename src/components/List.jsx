import { useState } from "react";

import { DetailModal } from "./DetailModal";

/* eslint-disable react/prop-types */

export function List({ name, call, group, setGroups }) {
  const [isModal, setIsModal] = useState(false);

  const removeContact = () => {
    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];

    const updatedList = prevList.filter((item) => item.name !== name);
    setGroups(updatedList);
    localStorage.setItem("contactList", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className="list">
        <div className="info">
          <span>{name}</span>
          <span>{call}</span>
          <span>{group}</span>
        </div>
        <div className="button-wrapper">
          <button onClick={() => setIsModal(true)}>세부사항</button>
          <button onClick={removeContact}>삭제</button>
        </div>
      </div>
      {isModal && <DetailModal setIsModal={setIsModal} />}
    </>
  );
}
