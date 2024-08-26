'use client';
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { CategoryOption } from '@interfaces/category';

interface UiSelectProps {
  label: string;
  options: CategoryOption[];
  name: string;
  selectedValue?: string;
  id?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<UiSelectProps> = memo(
  ({ label, options, name, selectedValue, id, className = '', onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | undefined>(selectedValue);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelect = useCallback(
      (value: string) => {
        setSelected(value);
        setIsOpen(false);
        if (onChange) onChange(value);
      },
      [onChange],
    );

    const handleOpen = useCallback(
      (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        setIsOpen((prev) => !prev);
      },
      [],
    );

    const handleClickOutside = useCallback((event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }, []);

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, handleClickOutside]);

    return (
      <div ref={selectRef} className={`relative ${className}`}>
        <label htmlFor={id || name} className="block text-gray-input mb-1">
          {label}
        </label>
        <div className="relative">
          <button
            id={id || name}
            name={name}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={handleOpen}
            className="w-full h-14 bg-white rounded-xl shadow-sm pl-3 text-left cursor-pointer focus:outline-none"
          >
            <span className="block truncate">
              {selected
                ? options.find((option) => option.value === selected)?.label
                : 'Selecione uma opção'}
            </span>
          </button>
          {isOpen && (
            <ul
              role="listbox"
              aria-labelledby={id || name}
              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSelect(option.value);
                    }
                  }}
                  aria-selected={selected === option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`cursor-pointer select-none relative hover:bg-primary-light hover:text-gray-input py-2 pr-9 ${
                    selected === option.value
                      ? 'text-white bg-primary'
                      : 'text-gray-900'
                  }`}
                  style={{
                    paddingLeft: `${option.level ? option.level * 30 : 10}px`,
                  }}
                >
                  <span
                    className={`block truncate ${
                      option.level === 0
                        ? 'font-bold'
                        : option.level === 1
                          ? 'font-semibold'
                          : 'font-normal'
                    }`}
                  >
                    {option.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <input type="hidden" name={name} value={selected || ''} />
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
