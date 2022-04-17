import React from "react";

const ImageUpload = ({ id, onchange, value }) => {
  return (
    <div className="flex flex-col w-full py-2">
      <label className="text-zinc-800 text-xl font-semibold">
        Upload a picture of your Legitimation card
      </label>
      <label
        htmlFor={id}
        className="border-dashed w-full bg-white flex flex-col justify-center items-center rounded-lg py-12 cursor-pointer"
      >
        <i className="fa-solid fa-cloud-arrow-up text-2xl"></i>
        <span className="capitalize">browse files</span>
      </label>
      <input
        type="file"
        accept="image/*"
        id={id}
        multiple
        className="hidden"
        name={id}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default ImageUpload;
