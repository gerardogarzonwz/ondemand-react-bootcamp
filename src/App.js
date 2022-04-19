import './App.css';

import Content from './components/Content'
import Footer from './components/Footer';
import Header from './components/Header'

import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
