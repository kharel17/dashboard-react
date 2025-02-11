import React from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users2
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { icon: DollarSign, label: 'Total Revenue', value: 'NPR 54,239', trend: '+12.5%' },
          { icon: ShoppingBag, label: 'Total Orders', value: '1,432', trend: '+8.2%' },
          { icon: Users2, label: 'Total Customers', value: '892', trend: '+5.1%' },
          { icon: TrendingUp, label: 'Conversion Rate', value: '2.4%', trend: '+1.2%' }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-green-500 text-sm font-medium">{stat.trend}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Customer</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: '#12345', customer: 'Aarav Sharma', product: 'iPhone 15 Pro', amount: 'NPR 159,900', status: 'Delivered' },
                { id: '#12346', customer: 'Priya Adhikari', product: 'MacBook Air', amount: 'NPR 189,900', status: 'Processing' },
                { id: '#12347', customer: 'Rajesh Poudel', product: 'AirPods Pro', amount: 'NPR 45,900', status: 'Shipped' },
                { id: '#12348', customer: 'Sita Thapa', product: 'iPad Air', amount: 'NPR 89,900', status: 'Pending' }
              ].map((order, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 text-gray-800 font-medium">{order.id}</td>
                  <td className="py-4 text-gray-600">{order.customer}</td>
                  <td className="py-4 text-gray-600">{order.product}</td>
                  <td className="py-4 text-gray-800 font-medium">{order.amount}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;