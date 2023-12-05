/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Icon component placeholder
const Icon = ({ icon }) => (
  <img src={icon} alt="" className="h-5 w-5 mr-2" />
)

// Updated Dropdown component to include icons
export default function Dropdown({ label, items, onSelect }) {
  // State for the selected item
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {selectedItem.icon && <Icon icon={selectedItem.icon} />}
          {selectedItem.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <button
                    type="button"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center w-full px-4 py-2 text-sm text-left'
                    )}
                    onClick={() => {
  setSelectedItem(item);
  if (onSelect) onSelect(item);
}}
                  >
                {item.icon && <Icon icon={item.icon} />}
                {item.name}
              </button>
            )}
          </Menu.Item>
            ))}
        </div>
      </Menu.Items>
    </Transition>
    </Menu >
  )
}

// Example of usage:
/*
<Dropdown
  label="Select option"
  items={[
    { name: 'Github', icon: '/path/to/github/icon.svg' },
    { name: 'Instagram', icon: '/path/to/instagram/icon.svg' },
    // ... other items
  ]}
/>
*/
