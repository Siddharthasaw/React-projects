import './App.css';
import TextFrom from './components/TextFrom';
 import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
     <div className="container my-3">
     <TextFrom/>
     </div>
    
    </>
    );
}

export default App;
