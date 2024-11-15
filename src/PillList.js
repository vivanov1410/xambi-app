import React, { useState } from 'react';

const PillList = ({ attribute, attributeName, value, onChange, required }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    const trimmedValue = inputValue.trim();
    if (e.key === 'Enter' && trimmedValue.length > 0) {
      e.preventDefault();
      const newValue = [...(value || []), trimmedValue];
      onChange(newValue);
      setInputValue('');
    }
  };

  const removePill = (index) => {
    const newValue = value.filter((_, i) => i !== index);
    onChange(newValue);
  };

  return (
    <div className="col-span-6">
      <label htmlFor={attribute} className="block text-sm font-medium text-gray-700">
        {attributeName}{required && '*'}
      </label>
      <div className="mt-1 flex flex-wrap items-center gap-1 p-1 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
        {value && value.map((pill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-1 py-1 rounded-md text-xs font-medium bg-white text-indigo-600 border border-gray-300 mr-1"
          >
            {pill}
            <button
              type="button"
              className="ml-1 inline-flex text-blue-600 hover:text-blue-800"
              onClick={() => removePill(index)}
            >
              <svg className="h-4 w-4" fill="grey" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </span>
        ))}
        <input
          type="text"
          id={attribute}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow min-w-0 border-1 p-0 text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          placeholder="Type and press Enter to add"
        />
      </div>
    </div>
  );
};

export default PillList;
