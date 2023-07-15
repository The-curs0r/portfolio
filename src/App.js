import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
		<Navbar />
		<div className="not-navbar-container">
			<Router>
				<Routes>
					<Route exact path="/about" element={<About />} />
					<Route exact path="/experience" element={<Experience />} />
					<Route exact path="/" element={<About />} />
				</Routes>
			</Router>
		</div>
    </div>
  );
}

export default App;
