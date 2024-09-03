/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { updatedState } from "@atoms";
import { validateCall, validateName } from "@shared";

export function DetailModal({ item, setIsModal }) {
  const [group, setGroup] = useState(item.group);
  const [name, setName] = useState(item.name);
  const [call, setCall] = useState(item.call);
  const [detail, setDetail] = useState(item.detail);

  const setIsUpdated = useSetRecoilState(updatedState);

  const editInfo = () => {
    if (validateName(name) || validateCall(call)) {
      alert(`${validateName(name) || ""}\n${validateCall(call) || ""}`);
      return;
    }

    const updatedItem = {
      name,
      call,
      group,
      detail,
    };

    const contactList = JSON.parse(localStorage.getItem("contactList")) || [];
    const updatedContacts = contactList.map((contact) =>
      contact.name === item.name ? updatedItem : contact
    );

    localStorage.setItem("contactList", JSON.stringify(updatedContacts));
    setIsUpdated((prev) => !prev);
    alert("수정 되었습니다!");
    setIsModal(false);
  };

  return (
    <div className="detail-wrapper">
      <button
        className="close-button"
        onClick={() => {
          setIsModal(false);
        }}
      >
        닫기
      </button>
      <section className="detail-modal">
        <h2>연락처 상세 정보</h2>
        <ul>
          <DetailItem group="name" content={name} set={setName} />
          <DetailItem group="call" content={call} set={setCall} />
          <DetailItem group="group" content={group} set={setGroup} />
          <DetailItem group="detail" content={detail} set={setDetail} />
        </ul>
        <button className="edit-button" onClick={editInfo}>
          수정
        </button>
      </section>
    </div>
  );
}

const switchName = {
  name: "이름",
  call: "전화번호",
  group: "그룹",
  detail: "메모",
};

const DEFAULT_GROUPS = ["가족", "친구", "직장", "스터디"];

function DetailItem({ group, content, set }) {
  const groups = JSON.parse(localStorage.getItem("group")) || DEFAULT_GROUPS;
  return (
    <li className="group-item">
      <span>{switchName[group]}:</span>
      {group !== "group" ? (
        <input
          className="content"
          value={content}
          onChange={(e) => {
            set(e.target.value);
          }}
        />
      ) : (
        <select
          value={content}
          onChange={(e) => {
            set(e.target.value);
          }}
        >
          {groups.map((group) => {
            return <option key={group}>{group}</option>;
          })}
        </select>
      )}
    </li>
  );
}
