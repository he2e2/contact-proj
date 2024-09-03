import { InputEl } from "./InputEl";
import { SelectEl } from "./SelectEl";

export function InputCon() {
  return (
    <div className="input-con">
      <InputEl label="이름" name="name" />
      <InputEl label="전화번호" name="call" />
      <SelectEl />
      <InputEl label="간단한기록" name="detail" />
    </div>
  );
}
