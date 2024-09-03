export const validateName = (value) => {
  if (!/^[가-힣]{2,}\d*$/.test(value)) {
    return "이름은 한글로 두 글자 이상이어야 합니다.";
  }
  return "";
};

export const validateCall = (value) => {
  if (!/^010-\d{4}-\d{4}$/.test(value)) {
    return "전화번호는 010-0000-0000 형식이어야 합니다.";
  }
  return "";
};

export const checkDuplicate = (name, call) => {
  const prevList = JSON.parse(localStorage.getItem("contactList")) || [];

  return (
    prevList.some((item) => item.name === name) ||
    prevList.some((item) => item.call === call)
  );
};
