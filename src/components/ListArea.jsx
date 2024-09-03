import { SearchCon } from "./SearchCon";
import { List } from "./List";

const dummy = {
  0: {
    name: "박은규",
    call: "010-1111-2222",
    group: "직장",
  },
  1: {
    name: "김영희",
    call: "010-1111-2222",
    group: "직장",
  },
  2: {
    name: "박민수",
    call: "010-1111-2222",
    group: "직장",
  },
  3: {
    name: "순심이",
    call: "010-1111-2222",
    group: "직장",
  },
};

export function ListArea() {
  return (
    <div className="list-area">
      <SearchCon />
      <div className="list-wrapper">
        {Object.entries(dummy).map((list) => {
          return (
            <List
              key={list[1].name}
              name={list[1].name}
              call={list[1].call}
              group={list[1].group}
            />
          );
        })}
      </div>
    </div>
  );
}
