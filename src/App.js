import './App.css';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import { useGlobalContext } from './context';
import Footer from './components/Footer';

function App() {
  const { showModal, favorites } = useGlobalContext()

  return (
    <main>
        <Search />
        {favorites.length > 0 && <Favorites />}
        <Meals />
        {showModal && <Modal />}

        <Footer />
      </main>
  );
}

export default App;
