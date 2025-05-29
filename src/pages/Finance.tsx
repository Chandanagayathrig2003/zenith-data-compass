
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Finance: React.FC = () => {
  const portfolioData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 48000 },
    { month: 'Mar', value: 44000 },
    { month: 'Apr', value: 52000 },
    { month: 'May', value: 49000 },
    { month: 'Jun', value: 55000 },
  ];

  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.25, change: 2.5, changeAmount: 4.25, trend: 'up' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.80, change: -1.2, changeAmount: -1.75, trend: 'down' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 338.50, change: 3.1, changeAmount: 10.25, trend: 'up' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.60, change: -2.8, changeAmount: -7.10, trend: 'down' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 128.90, change: 1.8, changeAmount: 2.30, trend: 'up' },
  ];

  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: 43250, change: 5.2, trend: 'up' },
    { name: 'Ethereum', symbol: 'ETH', price: 2680, change: -2.1, trend: 'down' },
    { name: 'Cardano', symbol: 'ADA', price: 0.45, change: 8.5, trend: 'up' },
    { name: 'Solana', symbol: 'SOL', price: 98.50, change: 12.3, trend: 'up' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Financial Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your investments, portfolio performance, and market trends
          </p>
        </motion.div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Total Portfolio', value: '$55,000', change: '+12.5%', icon: DollarSign, color: 'blue' },
            { title: 'Today\'s Gain', value: '+$1,250', change: '+2.3%', icon: TrendingUp, color: 'green' },
            { title: 'Total Gain', value: '+$8,750', change: '+18.9%', icon: ArrowUpRight, color: 'purple' },
            { title: 'Assets', value: '12', change: '+2 this month', icon: PieChart, color: 'orange' },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className={`text-sm ${stat.color === 'green' ? 'text-green-600' : stat.color === 'blue' ? 'text-blue-600' : stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`}>
                          {stat.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/20' : stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/20' : stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/20' : 'bg-orange-100 dark:bg-orange-900/20'}`}>
                        <IconComponent className={`w-6 h-6 ${stat.color === 'green' ? 'text-green-600' : stat.color === 'blue' ? 'text-blue-600' : stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Portfolio Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.2)" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      fill="url(#colorGradient)"
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stock Holdings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Stock Holdings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stocks.map((stock, index) => (
                    <motion.div
                      key={stock.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{stock.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{stock.symbol}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{stock.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">${stock.price}</p>
                        <div className={`flex items-center space-x-1 ${stock.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          <span className="text-sm font-medium">{stock.change}%</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cryptocurrency */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Cryptocurrency</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cryptoData.map((crypto, index) => (
                    <motion.div
                      key={crypto.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{crypto.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{crypto.symbol}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{crypto.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">${crypto.price.toLocaleString()}</p>
                        <div className={`flex items-center space-x-1 ${crypto.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {crypto.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          <span className="text-sm font-medium">{crypto.change}%</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Finance;
