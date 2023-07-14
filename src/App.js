import './App.css';
import Page from './Page'
import BugTracker from './projects/BugTracker'
import QuickCV from './projects/QuickCV'
import Tourist from './projects/Tourist'
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>

<>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page/>}/>
        <Route exact path="/projects/bugtracker" element={<BugTracker/>}/>
        <Route exact path="/projects/quickcv" element={<QuickCV/>}/>
        <Route exact path="/projects/tourist" element={<Tourist/>}/>
      </Routes>
      </BrowserRouter>
      </>

      


    </div>
  );
}

export default App;
