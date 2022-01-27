import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="appContainer">
      <div className='appTop'>
        <Navbar />
      </div>
      <div className='appBottom'>
        <div className='sidebarApp'>
          <Sidebar />
        </div>
        <div className='homeApp'>
          <Home />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
