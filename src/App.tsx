import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
