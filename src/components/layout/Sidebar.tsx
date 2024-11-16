import type React from 'react';
import type { TitleComponent } from 'react-admin';

import { MdMenu as MenuIcon } from 'react-icons/md';

interface SidebarProps {
  onToggle: () => void;
  children: React.ReactNode;
  title: TitleComponent | undefined;
}
interface SidebarToggleProps {
  onClick: () => void;
  className?: string;
}

interface SidebarComponent extends React.FC<SidebarProps> {
  Toggle: React.FC<SidebarToggleProps>;
}

const Sidebar: SidebarComponent = ({ onToggle, children, title }) => {
  return (
    <div
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full bg-white shadow-lg transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="flex items-center">
        <SidebarToggle onClick={onToggle} className="p-5 text-black" />
        <h1 className="text-2xl text-black">{title}</h1>
      </div>
      <div className="border-b border-gray-200 p-5">{children}</div>
    </div>
  );
};

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      className={`focus:outline-none ${className}`}
      onClick={onClick}
      aria-label="Toggle sidebar"
    >
      <MenuIcon size={24} title="Toggle sidebar" />
    </button>
  );
};

Sidebar.Toggle = SidebarToggle;

export default Sidebar;
