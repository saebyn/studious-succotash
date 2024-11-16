import { Resource } from 'react-admin';
import dataProvider from './dataProvider.ts';
import i18nProvider from './i18nProvider.ts';

import Admin from './components/Admin.tsx';
import ListGuesser from './components/list/ListGuesser.tsx';
import EditGuesser from './components/detail/EditGuesser.tsx';
import ShowGuesser from './components/detail/ShowGuesser.tsx';

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    title="Admin Panel"
  >
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);

export default App;
