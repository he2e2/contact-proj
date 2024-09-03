/* eslint-disable react/prop-types */

export function DetailModal({ item, setIsModal }) {
  return (
    <div className="detail-wrapper">
      <button
        className="close-button"
        onClick={() => {
          setIsModal(false);
        }}
      >
        닫기
      </button>
      <section className="detail-modal">
        <h2>연락처 상세 정보</h2>
        <ul>
          {Object.entries(item).map(([group, content]) => {
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
