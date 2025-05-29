
import React from 'react';
import { Provider } from 'react-redux';
import { motion } from 'framer-motion';
import { store } from '@/store/store';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import WeatherWidget from '@/components/Widgets/WeatherWidget';

const Dashboard: React.FC = () => {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome to your comprehensive data analytics platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <WeatherWidget />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                News Headlines
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="w-16 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                        Breaking: Major tech announcement impacts market
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Market Overview
              </h3>
              <div className="space-y-4">
                {['AAPL', 'GOOGL', 'MSFT'].map((symbol) => (
                  <div key={symbol} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{symbol}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">$150.25</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 font-medium">+2.5%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">+$3.75</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">127</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Users</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">89%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Performance</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Data updated for weather service
                    </p>
                    <span className="text-xs text-gray-400 ml-auto">
                      {item}m ago
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </DashboardLayout>
    </Provider>
  );
};

const Index = Dashboard;
export default Index;
