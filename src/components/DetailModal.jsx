/* eslint-disable react/prop-types */

import { useSetRecoilState } from "recoil";

import { updatedState } from "@atoms";
import { useInputState } from "@features";

export function DetailModal({ item, setIsModal }) {
  const {
    groups,
    selectedGroup,
    name,
    call,
    detail,
    setSelectedGroup,
    setName,
    setCall,
    setDetail,
    editData,
  } = useInputState(item.name, item.call, item.group, item.detail);

  const setIsUpdated = useSetRecoilState(updatedState);

  const fields = [
    { key: "name", value: name, setter: setName },
    { key: "call", value: call, setter: setCall },
    { key: "group", value: selectedGroup, setter: setSelectedGroup },
    { key: "detail", value: detail, setter: setDetail },
  ];

  return (
    <div className="detail-wrapper">
      <button className="close-button" onClick={() => setIsModal(false)}>
        닫기
      </button>
      <section className="detail-modal">
        <h2>연락처 상세 정보</h2>
        <ul>
          {fields.map(({ key, value, setter }) => (
            <DetailItem
              key={key}
              fieldKey={key}
              content={value}
              set={setter}
              label={switchName[key]}
              groups={groups}
            />
          ))}
        </ul>
        <button
          className="edit-button"
          onClick={() => {
            editData(setIsUpdated, setIsModal, item);
          }}
        >
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

function DetailItem({ fieldKey, content, set, label, groups }) {
  const renderInputField = () => {
    if (fieldKey === "group") {
      return (
        <select value={content} onChange={(e) => set(e.target.value)}>
          {groups.map((group) => (
            <option key={group}>{group}</option>
          ))}
        </select>
      );
    }
    return (
      <input
        className="content"
        value={content}
        onChange={(e) => set(e.target.value)}
      />
    );
  };

  return (
    <li className="group-item">
      <span>{label}:</span>
      {renderInputField()}
    </li>
  );
}
