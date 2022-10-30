import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/appHeader/appHeader';
import './Components/appHeader/bootstrap.min.css';
import './Components/appHeader/appHeader.css';
import './Components/appRegistration/appRegistration.css';
import AppRegistration from './Components/appRegistration/appRegistration';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppRegistration></AppRegistration>
    </div>
  );
}

export default App;
