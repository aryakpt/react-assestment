import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

import { HeaderContextProvider } from './contexts';

function App() {
  return (
    <>
      <HeaderContextProvider>
        <Layout>
          <Home />
        </Layout>
      </HeaderContextProvider>
    </>
  );
}

export default App;
