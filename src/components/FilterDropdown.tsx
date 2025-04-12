'use client'

import React from 'react'

type FilterDropdownProps = {
  label: string
  options: string[]
  selectedOption: string
  onSelect: (value: string) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 align-top font-medium">{label}</label>
      <select
        className="p-2 border border-gray-300 rounded-md"
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">All</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterDropdown
