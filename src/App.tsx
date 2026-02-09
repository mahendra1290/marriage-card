import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Landing } from './components/sections/Landing';
import { Details } from './components/sections/Details';
import { Events } from './components/sections/Events';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Landing />
        <Details />
        <Events />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
