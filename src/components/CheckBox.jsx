import React from "react";

const CheckBox = ({ title, value, onchange, id }) => {
  return (
    <div className="flex items-center py-1 w-full mr-2">
      <input
        type="checkbox"
        title={title}
        id={id}
        value={title}
        name={"preferedLanguage"}
        onChange={onchange}
        className="h-6 w-6  outline-none"
      />
      <label className="text-lg font-semibold ml-1" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
