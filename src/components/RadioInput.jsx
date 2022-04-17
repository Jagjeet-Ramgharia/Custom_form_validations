import React from "react";

const RadioInput = ({ id, value, onchange, label, title, name }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mt-2">
        <input
          className="h-6 w-6 rounded-full outline-none"
          type="radio"
          id={id}
          name={name}
          // required={true}
          value={value}
          onChange={onchange}
        />
        <label className="text-lg font-semibold ml-1" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
