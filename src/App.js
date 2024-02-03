import './App.css';
import Search from './components/Search';
// import Favorites from './components/Favorites';
import Meals from './components/Meals';
// import Modals from './components/Modals';

function App() {
  return (
    <main>
        <Search />
        {/* <Favorites /> */}
        <Meals />
        {/* <Modals /> */}
      </main>
  );
}

export default App;
