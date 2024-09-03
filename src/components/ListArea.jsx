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
  console.log(groups);
  return (
    <div className="list-area">
      <SearchCon />
      <div className="list-wrapper">
        {Object.entries(groups).map((list) => {
          return (
            <List
              key={list[1].name}
              name={list[1].name}
              call={list[1].call}
              group={list[1].group}
              setGroups={setGroups}
            />
          );
        })}
      </div>
    </div>
  );
}
