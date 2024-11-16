import {
  type ResourceProps,
  useCreatePath,
  useResourceDefinitions,
} from 'ra-core';
import type React from 'react';

interface MenuProps {
  hasDashboard?: boolean;
}

const Menu: React.FC<MenuProps> = () => {
  const createPath = useCreatePath();
  const resouceDefinitions = useResourceDefinitions<ResourceProps>();
  const resouces = Object.keys(resouceDefinitions);

  return (
    <nav className="mt-5">
      <ul>
        {resouces.map((resource) => (
          <li key={resource}>
            <a
              href={createPath({ type: 'list', resource })}
              className="capitalize"
            >
              {resouceDefinitions[resource].icon}
              {resouceDefinitions[resource].name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
