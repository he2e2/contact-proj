import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { updatedState } from "@atoms";
import { SearchCon } from "./SearchCon";
import { List } from "./List";

export function ListArea() {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );
  const isUpdated = useRecoilValue(updatedState);

  useEffect(() => {
    setLists(JSON.parse(localStorage.getItem("contactList")) || []);
  }, [isUpdated]);

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
