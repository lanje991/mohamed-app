
import './App.css'
import Greetings from './components/Greetings'
import Header from './components/Header'
import { Tiriye  } from './components/Counter';
import ThemeToggle from './components/ThemeSwitcher';
import Clicker from './components/Clicker';
import Inputter from './components/Inputter';
import Welcome from './components/Welcome_message';
import Dashboard from './components/Dashboard';
import ShowWarning from './components/ShowWarning';

function App() {

  return (
    <>
      <Header />
      <Welcome/>
      <ShowWarning/>

      <Inputter />
      <Greetings name="Mohamed" surname="Abdirahman" lastname="Seid" />
      <Tiriye />
      <ThemeToggle />
      <Dashboard isLoggedin={true}/>
      <Clicker />
     
    </>
  );
}

export default App
