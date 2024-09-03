import { useState } from "react";

import { DetailModal } from "./DetailModal";

/* eslint-disable react/prop-types */

export function List({ item, setLists }) {
  const [isModal, setIsModal] = useState(false);

  const removeContact = () => {
    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];

    const updatedList = prevList.filter((item) => item.name !== name);
    setLists(updatedList);
    localStorage.setItem("contactList", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className="list">
        <div className="info">
          <span>{item.name}</span>
          <span>{item.call}</span>
          <span>{item.group}</span>
        </div>
        <div className="button-wrapper">
          <button onClick={() => setIsModal(true)}>세부사항</button>
          <button onClick={removeContact}>삭제</button>
        </div>
      </div>
      {isModal && <DetailModal item={item} setIsModal={setIsModal} />}
    </>
  );
}
