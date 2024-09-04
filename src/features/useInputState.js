import { useState } from "react";
import {
  validateCall,
  validateName,
  DEFAULT_GROUPS,
  checkDuplicate,
} from "@shared";

export function useInputState(
  initName = "",
  initCall = "",
  initGroup = "가족",
  initDetail = ""
) {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("group")) || DEFAULT_GROUPS
  );
  const [selectedGroup, setSelectedGroup] = useState(initGroup);
  const [name, setName] = useState(initName);
  const [call, setCall] = useState(initCall);
  const [detail, setDetail] = useState(initDetail);

  const [nameError, setNameError] = useState("");
  const [callError, setCallError] = useState("");

  const validateInputs = () => {
    const nameError = validateName(name);
    const callError = validateCall(call);

    setNameError(nameError);
    setCallError(callError);

    return !nameError && !callError;
  };

  const saveData = (setIsUpdated) => {
    if (checkDuplicate(name, call)) {
      alert("이미 같은 이름 혹은 전화번호의 연락처가 존재합니다.");
      return;
    }

    if (!validateInputs()) {
      return;
    }

    const prevList = JSON.parse(localStorage.getItem("contactList")) || [];
    const lastId = prevList.length > 0 ? prevList[0].id : 0;
    const newId = lastId + 1;

    const data = {
      id: newId,
      name,
      call,
      group: selectedGroup,
      detail,
    };

    localStorage.setItem("contactList", JSON.stringify([data, ...prevList]));

    setIsUpdated((prev) => !prev);
  };

  const editData = (setIsUpdated, setIsModal, item) => {
    if (checkDuplicate(name, call, item.id)) {
      alert("이미 같은 이름 혹은 전화번호의 연락처가 존재합니다.");
      return;
    }

    if (validateName(name) || validateCall(call)) {
      alert(`${validateName(name) || ""}\n${validateCall(call) || ""}`);
      return;
    }

    const updatedItem = {
      id: item.id,
      name,
      call,
      group: selectedGroup,
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

  return {
    groups,
    selectedGroup,
    name,
    call,
    detail,
    nameError,
    callError,
    setGroups,
    setSelectedGroup,
    setName,
    setCall,
    setDetail,
    saveData,
    editData,
  };
}
