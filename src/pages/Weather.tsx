
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Sun, CloudRain, Thermometer } from 'lucide-react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Weather: React.FC = () => {
  const mockWeatherData = {
    current: {
      location: 'New York, NY',
      temperature: 22,
      description: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      pressure: 1013,
      visibility: 10,
    },
    forecast: [
      { day: 'Today', temp: 22, low: 18, icon: Sun, description: 'Sunny' },
      { day: 'Tomorrow', temp: 25, low: 20, icon: CloudRain, description: 'Light Rain' },
      { day: 'Tuesday', temp: 20, low: 15, icon: Cloud, description: 'Cloudy' },
      { day: 'Wednesday', temp: 24, low: 19, icon: Sun, description: 'Sunny' },
      { day: 'Thursday', temp: 26, low: 21, icon: Sun, description: 'Clear' },
    ],
    hourly: [
      { time: '12:00', temp: 22, icon: Sun },
      { time: '13:00', temp: 24, icon: Sun },
      { time: '14:00', temp: 25, icon: Cloud },
      { time: '15:00', temp: 23, icon: CloudRain },
      { time: '16:00', temp: 21, icon: CloudRain },
      { time: '17:00', temp: 20, icon: Cloud },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Weather Forecast
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Detailed weather information and forecasts
          </p>
        </motion.div>

        {/* Current Weather */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Current Weather</span>
                <Cloud className="w-8 h-8" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{mockWeatherData.current.temperature}°C</h2>
                  <p className="text-xl mb-1">{mockWeatherData.current.location}</p>
                  <p className="text-lg opacity-90">{mockWeatherData.current.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5" />
                    <div>
                      <p className="text-sm opacity-90">Humidity</p>
                      <p className="font-semibold">{mockWeatherData.current.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="w-5 h-5" />
                    <div>
                      <p className="text-sm opacity-90">Wind</p>
                      <p className="font-semibold">{mockWeatherData.current.windSpeed} km/h</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-5 h-5" />
                    <div>
                      <p className="text-sm opacity-90">Pressure</p>
                      <p className="font-semibold">{mockWeatherData.current.pressure} hPa</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="w-5 h-5" />
                    <div>
                      <p className="text-sm opacity-90">Visibility</p>
                      <p className="font-semibold">{mockWeatherData.current.visibility} km</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hourly Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Hourly Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {mockWeatherData.hourly.map((hour, index) => {
                  const IconComponent = hour.icon;
                  return (
                    <motion.div
                      key={hour.time}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex-shrink-0 text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[80px]"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{hour.time}</p>
                      <IconComponent className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                      <p className="font-semibold">{hour.temp}°</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 5-Day Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockWeatherData.forecast.map((day, index) => {
                  const IconComponent = day.icon;
                  return (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16">
                          <p className="font-medium">{day.day}</p>
                        </div>
                        <IconComponent className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-600 dark:text-gray-300">{day.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">{day.temp}°</span>
                        <span className="text-gray-500 ml-2">{day.low}°</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Weather;
