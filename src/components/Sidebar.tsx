import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  ShoppingCart,
  Users,
  Package,
  Settings,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-white h-full border-r border-gray-200 transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between">
        <div className={`flex items-center ${collapsed ? 'justify-center w-full' : ''}`}>
          <ShoppingCart className="h-8 w-8 text-gray-700" />
          {!collapsed && <span className="ml-3 font-semibold text-xl">Store</span>}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? 'hidden' : ''} p-1 rounded-full hover:bg-gray-100`}
        >
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      
      <nav className="mt-8">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center px-4 py-3 ${
                isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              {!collapsed && (
                <span className={`ml-3 ${isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;