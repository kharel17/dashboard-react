import React from 'react';
import { Search, Filter, UserPlus } from 'lucide-react';

const Customers: React.FC = () => {
  const customers = [
    {
      id: 1,
      name: 'Aarav Sharma',
      email: 'aarav@blanxertech.com',
      orders: 12,
      spent: 'NPR 245,900',
      lastOrder: '2024-03-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya Adhikari',
      email: 'priya@blanxertech.com',
      orders: 8,
      spent: 'NPR 189,200',
      lastOrder: '2024-03-14',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Rajesh Poudel',
      email: 'rajesh@blanxertech.com',
      orders: 5,
      spent: 'NPR 89,900',
      lastOrder: '2024-03-13',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Sita Thapa',
      email: 'sita@blanxertech.com',
      orders: 15,
      spent: 'NPR 324,200',
      lastOrder: '2024-03-15',
      status: 'Active'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Customers</h1>
        <p className="text-gray-600 mt-1">Manage your customer base</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Customer
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Last Order</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 last:border-b-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-medium text-gray-800">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.orders}</td>
                  <td className="px-6 py-4 text-gray-800 font-medium">{customer.spent}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.lastOrder}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
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
            <p className="text-sm text-gray-600">Showing 4 of 12 customers</p>
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

export default Customers;