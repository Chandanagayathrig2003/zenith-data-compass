
import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleSidebar, toggleDarkMode } from '@/store/slices/uiSlice';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { darkMode, sidebarOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onToggle={() => dispatch(toggleSidebar())} />
        
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <Header 
            onToggleSidebar={() => dispatch(toggleSidebar())}
            onToggleDarkMode={() => dispatch(toggleDarkMode())}
            darkMode={darkMode}
          />
          
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
