import { useState } from 'react';
import type { LayoutProps } from 'react-admin';

import Sidebar from './Sidebar.tsx';
import Menu from './Menu.tsx';

const Layout = ({ children, title, dashboard }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-gray-800 py-4">
        <div className="container px-4">
          <div className="flex items-center">
            <Sidebar.Toggle onClick={toggleSidebar} className="text-white" />
            <h1 className="pl-5 text-2xl text-white">{title}</h1>
            <div
              className={`${
                isSidebarOpen ? 'ml-20' : 'ml-10'
              } text-white transition-all duration-300
              `}
            >
              Other nav
            </div>
          </div>
        </div>
      </header>
      <main className="container flex-1 px-4 py-8">
        {isSidebarOpen && (
          <Sidebar onToggle={toggleSidebar} title={title}>
            <Menu hasDashboard={!!dashboard} />
          </Sidebar>
        )}

        <div
          className={`${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          } transition-all duration-300`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
