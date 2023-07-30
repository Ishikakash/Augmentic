import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admission from './pages/Admission';
import Learning from './pages/Learning';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Admission />} />
        <Route path='/annual' element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;


// import Navbar from './components';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Admission from './pages/Admission';
// import Learning from './pages/Learning';
// import Home from './pages/Home';
// import About from './pages/About';
// //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' exact component={Home} />
//         <Route path='/about' component={About} />
//         <Route path='/events' component={Admission} />
//         <Route path='/annual' component={Learning} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
