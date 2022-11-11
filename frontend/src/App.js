import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { store } from './Redux/store';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
