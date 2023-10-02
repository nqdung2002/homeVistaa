import React from "react";
import "./Select.css";

export const Select = (props) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    props.onChange(selectedValue); // Gọi hàm onChange của component cha và truyền giá trị đã chọn
  };
  return (
    <>
      <div className="select-label">{props.label}</div>
      <select className="select-main" onChange={handleSelectChange}>
        {props.children}
      </select>
    </>
  );
};

export const Options = (props) => {
  return (
    <>
      <option value={props.value} className="option">
        {props.displayValue}
      </option>
    </>
  );
};
