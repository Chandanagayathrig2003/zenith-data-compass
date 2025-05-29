
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, Filter, Search, TrendingUp } from 'lucide-react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'tech', name: 'Technology', count: 8 },
    { id: 'business', name: 'Business', count: 6 },
    { id: 'science', name: 'Science', count: 5 },
    { id: 'sports', name: 'Sports', count: 5 },
  ];

  const mockNews = [
    {
      id: 1,
      title: 'Revolutionary AI Breakthrough Changes Everything',
      description: 'Scientists announce major breakthrough in artificial intelligence that could transform how we interact with technology.',
      category: 'tech',
      publishedAt: '2 hours ago',
      source: 'TechNews',
      image: '/placeholder.svg',
      trending: true,
    },
    {
      id: 2,
      title: 'Global Markets React to Economic Announcements',
      description: 'Stock markets worldwide show positive response to latest economic policy changes and trade agreements.',
      category: 'business',
      publishedAt: '4 hours ago',
      source: 'Financial Times',
      image: '/placeholder.svg',
      trending: false,
    },
    {
      id: 3,
      title: 'Space Mission Discovers New Exoplanets',
      description: 'Latest space telescope data reveals potentially habitable planets in nearby solar systems.',
      category: 'science',
      publishedAt: '6 hours ago',
      source: 'Space Daily',
      image: '/placeholder.svg',
      trending: true,
    },
    {
      id: 4,
      title: 'Championship Finals Set New Viewership Records',
      description: 'Sports fans worldwide tune in to watch historic championship match that breaks all previous records.',
      category: 'sports',
      publishedAt: '8 hours ago',
      source: 'Sports Network',
      image: '/placeholder.svg',
      trending: false,
    },
    {
      id: 5,
      title: 'Climate Innovation Shows Promising Results',
      description: 'New renewable energy technology demonstrates significant improvements in efficiency and cost reduction.',
      category: 'science',
      publishedAt: '12 hours ago',
      source: 'Green Tech',
      image: '/placeholder.svg',
      trending: false,
    },
    {
      id: 6,
      title: 'Tech Giant Announces Major Product Launch',
      description: 'Industry leader reveals next-generation product line with revolutionary features and capabilities.',
      category: 'tech',
      publishedAt: '1 day ago',
      source: 'Tech Insider',
      image: '/placeholder.svg',
      trending: true,
    },
  ];

  const filteredNews = selectedCategory === 'all' 
    ? mockNews 
    : mockNews.filter(article => article.category === selectedCategory);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Latest News
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Stay updated with the latest news and trending stories
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search news..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Trending News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-red-500" />
                <span>Trending Now</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockNews.filter(article => article.trending).map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>{article.source}</span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* News Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-t-lg mb-4"></div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                        {article.category.toUpperCase()}
                      </span>
                      {article.trending && (
                        <div className="flex items-center space-x-1 text-red-500">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs font-medium">Trending</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.publishedAt}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{article.source}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default News;
