/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { updatedState } from "@atoms";
import { validateCall, validateName } from "@shared";

export function InputEl({ label, name, set, errorText }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(errorText);

  const isUpdated = useRecoilValue(updatedState);

  useEffect(() => {
    setValue("");
  }, [isUpdated]);

  useEffect(() => {
    setError(errorText);
  }, [errorText]);

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
