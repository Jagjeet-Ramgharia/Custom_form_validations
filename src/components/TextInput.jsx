import React from "react";

const TextInput = ({
  type,
  label,
  placeholder,
  required,
  onchange,
  value,
  id,
  minLength,
}) => {
  return (
    <div className="flex flex-col py-1 w-full mr-2">
      <label htmlFor={id} className="text-zinc-800 text-xl font-semibold">
        {label}
      </label>
      <input
        className="rounded-lg border p-2 w-full outline-none mr-1"
        type={type}
        placeholder={placeholder}
        // required={required}
        value={value}
        onChange={onchange}
        id={id}
        name={id}
        minLength={minLength}
      />
    </div>
  );
};

export default TextInput;
