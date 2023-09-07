import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import myStore from './redux/store';

function App() {
  
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
      </Provider>
      
      
    </div>
  );
}

export default App;
