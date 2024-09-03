import { SearchCon } from "./SearchCon";
import { List } from "./List";
import { useState } from "react";

/*
TODO 검색 상태 관리
*/

export function ListArea() {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );

  return (
    <div className="list-area">
      <SearchCon />
      <div className="list-wrapper">
        {Object.entries(groups).map((list) => {
          return (
            <List key={list[1].name} item={list[1]} setGroups={setGroups} />
          );
        })}
      </div>
    </div>
  );
}
