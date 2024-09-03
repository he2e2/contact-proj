/* eslint-disable react/prop-types */

const groups = {
  이름: "박은규",
  전화번호: "010-2222-2222",
  그룹: "가족",
  메모: "동생",
};
export function DetailModal() {
  return (
    <div className="detail-wrapper">
      <button className="close-button">닫기</button>
      <section className="detail-modal">
        <h2>연락처 상세 정보</h2>
        <ul>
          {Object.entries(groups).map(([group, content]) => {
            return <DetailItem key={group} group={group} content={content} />;
          })}
        </ul>
      </section>
    </div>
  );
}

function DetailItem({ group, content }) {
  return (
    <li className="group-item">
      <span>{group}:</span>
      <span className="content">{content}</span>
    </li>
  );
}
