import { useState } from "react";

import { SearchCon } from "./SearchCon";
import { List } from "./List";

export function ListArea() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );

  return (
    <div className="list-area">
      <SearchCon setLists={setLists} />
      <div className="list-wrapper">
        {Object.entries(lists).map((list) => {
          return <List key={list[1].name} item={list[1]} setLists={setLists} />;
        })}
      </div>
    </div>
  );
}
