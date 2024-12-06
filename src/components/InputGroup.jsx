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
    <div className="rounded-md bg-white px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-white-600">
      <label htmlFor={name} className="block mb-3 text-xs text-gray-800 font-bold">
        {labelName}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="resize-none h-20 block w-full bg-whites text-black placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full bg-whites text-black placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
      )}
    </div>
  );
}
