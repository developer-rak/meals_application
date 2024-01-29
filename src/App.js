import './App.css';
// import Favorites from './components/Favorites';
import Meals from './components/Meals';
// import Modals from './components/Modals';
// import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meal Application</h1>
      </header>
      <main>
        {/* <Search /> */}
        {/* <Favorites /> */}

        <Meals />

        {/* <Modals /> */}
      </main>
    </div>
  );
}

export default App;
