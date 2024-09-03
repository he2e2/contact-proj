import { useState } from "react";

import { DetailModal } from "./DetailModal";

/* eslint-disable react/prop-types */
export function List({ name, call, group }) {
  const [isModal, setIsModal] = useState(false);
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
          <button>삭제</button>
        </div>
      </div>
      {isModal && <DetailModal />}
    </>
  );
}
