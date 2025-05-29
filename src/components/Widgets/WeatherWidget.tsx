
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Cloud, Droplets, Wind, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RootState } from '@/store/store';
import { setWeatherData, setLoading } from '@/store/slices/weatherSlice';

const WeatherWidget: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    // Mock weather data - replace with actual API call
    const mockWeatherData = {
      location: 'New York, NY',
      temperature: 22,
      description: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      forecast: [
        { date: 'Mon', temp: 22, description: 'Sunny' },
        { date: 'Tue', temp: 25, description: 'Cloudy' },
        { date: 'Wed', temp: 20, description: 'Rainy' },
        { date: 'Thu', temp: 24, description: 'Sunny' },
        { date: 'Fri', temp: 26, description: 'Partly Cloudy' },
        { date: 'Sat', temp: 23, description: 'Cloudy' },
        { date: 'Sun', temp: 21, description: 'Rainy' },
      ],
    };

    setTimeout(() => {
      dispatch(setWeatherData(mockWeatherData));
    }, 1000);
  }, [dispatch]);

  if (loading || !data) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Weather</h3>
        <Cloud className="w-6 h-6" />
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-3xl font-bold">{data.temperature}°C</span>
          <div className="text-sm opacity-90">
            <p>{data.location}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Droplets className="w-4 h-4" />
          <span className="text-sm">{data.humidity}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="w-4 h-4" />
          <span className="text-sm">{data.windSpeed} km/h</span>
        </div>
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4" />
          <span className="text-sm">Clear</span>
        </div>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.forecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="date" stroke="white" fontSize={12} />
            <YAxis stroke="white" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255,255,255,0.9)', 
                border: 'none', 
                borderRadius: '8px',
                color: '#333'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="white" 
              strokeWidth={2}
              dot={{ fill: 'white', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;
