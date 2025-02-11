import React from 'react';
import { Search, Filter } from 'lucide-react';

const Orders: React.FC = () => {
  const orders = [
    { id: '#12345', customer: 'John Doe', product: 'iPhone 15 Pro', amount: '$1,299', status: 'Delivered', date: '2024-03-15' },
    { id: '#12346', customer: 'Jane Smith', product: 'MacBook Air', amount: '$1,199', status: 'Processing', date: '2024-03-14' },
    { id: '#12347', customer: 'Robert Johnson', product: 'AirPods Pro', amount: '$249', status: 'Shipped', date: '2024-03-14' },
    { id: '#12348', customer: 'Emily Davis', product: 'iPad Air', amount: '$599', status: 'Pending', date: '2024-03-13' },
    { id: '#12349', customer: 'Michael Brown', product: 'Apple Watch', amount: '$399', status: 'Delivered', date: '2024-03-13' },
    { id: '#12350', customer: 'Sarah Wilson', product: 'MacBook Pro', amount: '$1,999', status: 'Processing', date: '2024-03-12' }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
        <p className="text-gray-600 mt-1">Manage and track your orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-b-0">
                  <td className="px-6 py-4 text-gray-800 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 text-gray-800 font-medium">{order.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 6 of 24 orders</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;