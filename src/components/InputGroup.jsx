import React from "react";

export default function InputGroup({
  name,
  type,
  labelName,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="rounded-md bg-gray-100 px-3 2xl:pb-1.5 2xl:pt-2.5 pb-1 pt-2  focus-within:outline-white-600">
      <label htmlFor={name} className="block 2xl:mb-3 lg:text-xs text-[13px] text-gray-800 font-bold">
        {labelName}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="resize-none h-20 block w-full bg-whites text-black bg-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 lg:text-sm/6 text-[13px]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full bg-whites text-black bg-gray-100 placeholder:text-gray-400 focus:outline focus:outline-0 lg:text-sm/6 text-[13px]"
        />
      )}
    </div>
  );
}
