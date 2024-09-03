/* eslint-disable react/prop-types */

const groups = ["가족", "친구", "직장", "스터디"];
export function GroupModal() {
  return (
    <div className="group-wrapper">
      <button className="close-button">닫기</button>
      <section className="group-modal">
        <h2>그룹 관리</h2>
        <ul>
          {groups.map((group) => {
            return <GroupItem key={group} group={group} />;
          })}
        </ul>
        <div className="input-wrapper">
          <input type="text" placeholder="새 그룹 이름" />
          <button>추가</button>
        </div>
      </section>
    </div>
  );
}

function GroupItem({ group }) {
  return (
    <li className="group-item">
      <span>{group}</span>
      <i className="fa-solid fa-x"></i>
    </li>
  );
}
