import { Routes, Route } from "react-router-dom";
import NavBar from './compoments/Navbar/Navbar';
import AllRecords from './pages/AllRecords/AllRecords';
import Home from './pages/Home/Home';

const App = (props) => {
  return (
      <>
      <NavBar />
      <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="allrecords" element={<AllRecords />} />
      </Routes>
      </div>
      </>
  );
}

export default App;
