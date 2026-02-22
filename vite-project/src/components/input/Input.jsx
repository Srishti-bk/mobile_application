import React from "react";

export default function Input({
  labelName,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {labelName}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}