/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const validateName = (value) => {
  if (!/^[가-힣]{2,}\d*$/.test(value)) {
    return "이름은 한글로 두 글자 이상이어야 합니다.";
  }
  return "";
};

const validateCall = (value) => {
  if (!/^010-\d{4}-\d{4}$/.test(value)) {
    return "전화번호는 010-0000-0000 형식이어야 합니다.";
  }
  return "";
};

export function InputEl({ label, name, set, isSave }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isSave) {
      setValue("");
      set("");
    }
  }, [isSave]);

  const handleValidate = (e) => {
    if (e.target.name === "name") {
      setError(validateName(e.target.value));
    } else if (e.target.name === "call") {
      setError(validateCall(e.target.value));
    }
  };

  return (
    <div className="input-el">
      <label htmlFor={name}>{label}</label>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder={label}
          name={name}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            set(e.target.value);
            handleValidate(e);
          }}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
