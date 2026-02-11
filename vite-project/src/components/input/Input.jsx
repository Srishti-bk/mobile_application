import React from 'react';

export default function Input({lableName,type,placeholder}){
    return(
        <div>
            <label className="block text-sm font-medium text-gray-700">{lableName}
            </label>
            <input
              type={type}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={placeholder}
            />
          </div>

         )
}