/* eslint-disable react/prop-types */

import { useState, useRef } from "react";

export function SearchCon({ setLists }) {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const displayAllLists = () => {
    setLists(JSON.parse(localStorage.getItem("contactList")) || []);
  };

  const handleSearch = () => {
    const all = JSON.parse(localStorage.getItem("contactList")) || [];
    const filteredContacts = all.filter(
      (contact) =>
        contact.name.includes(searchText) ||
        contact.call.includes(searchText) ||
        contact.group.includes(searchText)
    );

    setLists(filteredContacts);

    setSearchText("");
    inputRef.current.blur();
  };

  return (
    <div className="search-con">
      <input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력 후 엔터를 누르세요"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={displayAllLists}>전체리스트 보기</button>
    </div>
  );
}
