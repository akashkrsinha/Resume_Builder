import logo from './logo.svg';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Final from './Pages/Final';
import { Provider } from 'react-redux'
import store from './store'
import Skill from './Pages/Skill';
import Summary from './Pages/Summary';
import {app} from './firebaseConfig'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/final" element={<Final />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;