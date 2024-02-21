import Button from 'react-bootstrap/Button';
import './App.css';
import NavScrollExample from './components/NavScrollExample';
import Section from './components/Section';
import MidSection from './components/MidSection'
import LatestJobs from './components/LatestJobs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App" style={{backgroundColor: "blue"}}>
      <NavScrollExample />
      <Section />
      <MidSection />
      <LatestJobs />
      <Footer/>
      
   </div>
  );
}

export default App;
