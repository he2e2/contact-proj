/* eslint-disable react/prop-types */
export function InputEl({ label, name }) {
  return (
    <div className="input-el">
      <label htmlFor={name}>{label}</label>
      <input type="text" placeholder={label} name={name} />
    </div>
  );
}
