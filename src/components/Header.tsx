import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <img
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/475880400_1102965648531519_8800421982345297615_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JuEb7jASa2MQ7kNvgG-XHQi&_nc_oc=AdhuL7_t1Z8JqYPyGDCDuErvBSz5vEbmzHPU8RIZf-GLAsTgH5u3LIUw1PebQVMUCKiTPxDSsPfeX7sKZ2x2nVqD&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ACB4Z4zO8Jvg58qzog6aWup&oh=00_AYDId3wWQFa9cHUgpWwjwTzSBst26wtR-WrHoPiyIak9fA&oe=67B16A80"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;