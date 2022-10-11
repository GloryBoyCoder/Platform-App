import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ReactDOM } from 'react-dom';
import Login from './Components/Login';
import Upload from './Components/Upload'
import Ideas from './Components/Ideas'
import Messages from './Components/Messages'
import Profile from './Components/Profile'
import Notifications from './Components/Notifications'
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Header />
    
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/Upload' element={<Upload />} />
          <Route exact path='/Ideas' element={<Ideas />} />
          <Route exact path='/Notifications' element={<Notifications />} />
          <Route exact path='/Messages' element={<Messages />} />
          <Route exact path='/Profile' element={<Profile />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exat path='/SignUp' element={<SignUp />} />
        </Routes>
    
    </Router>
  );
}

export default App;
