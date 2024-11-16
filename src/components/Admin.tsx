import {
  CoreAdminContext,
  type CoreAdminContextProps,
  CoreAdminUI,
  type CoreAdminUIProps,
} from 'ra-core';

import Layout from './layout/Layout';

const Admin = (props: AdminProps) => {
  const { children, dataProvider, title, i18nProvider } = props;

  return (
    <CoreAdminContext dataProvider={dataProvider} i18nProvider={i18nProvider}>
      <CoreAdminUI layout={Layout} title={title}>
        {children}
      </CoreAdminUI>
    </CoreAdminContext>
  );
};

export interface AdminProps {
  children: React.ReactNode;
}

export default Admin;

export interface AdminProps extends CoreAdminContextProps, CoreAdminUIProps {}
