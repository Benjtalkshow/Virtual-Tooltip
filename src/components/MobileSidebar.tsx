import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          isOpen ? 'bg-gray-700 bg-opacity-50' : 'bg-transparent'
        } transition-opacity`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`w-72 h-full transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform`}
        >
          <Sidebar onClickX={toggleSidebar} onClickLink={toggleSidebar} />
        </div>
      </div>
      <div className={isOpen ? 'hidden' : 'absolute z-10 top-0 left-0 p-4'}>
        <AiOutlineMenu
          className='h-8 w-8 text-gray-500 hover:text-gray-900 cursor-pointer'
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default MobileSidebar;
