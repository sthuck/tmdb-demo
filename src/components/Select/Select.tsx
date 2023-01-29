import React from "react";
import { SelectProps, HasName, SelectPropsWithItemToValue } from "./types";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { CheckIcon, ChevronIcon } from "./icons";

const DefaultRender = (item: HasName) => <>{item.name}</>;

export const Select = <T extends HasName, V = T>(props: SelectProps<T, V>) => {
  const { onChange, options, value, className } = props;
  const { itemToValue } = props as SelectPropsWithItemToValue<T, V>;

  const innerOnChange = useCallback(
    (item: T) => {
      if (itemToValue) {
        (onChange as (item: V) => void)(itemToValue(item));
      } else {
        (onChange as (item: T) => void)(item);
      }
    },
    [itemToValue, onChange]
  );

  const innerValue = itemToValue
    ? options.find((o) => itemToValue(o) === value)
    : (value as T);

  const itemRender = props.renderItems ?? DefaultRender;

  return (
    <div className={className}>
      <Listbox value={innerValue} onChange={innerOnChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {value ? itemRender(innerValue as T) : "No option selected"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-purple-100 text-purple-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {itemRender(option)}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
