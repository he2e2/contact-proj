/* eslint-disable react/prop-types */
export function List({ name, call, group }) {
  return (
    <div className="list">
      <div className="info">
        <span>{name}</span>
        <span>{call}</span>
        <span>{group}</span>
      </div>
      <div className="button-wrapper">
        <button>세부사항</button>
        <button>삭제</button>
      </div>
    </div>
  );
}
