import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetails";
import Catagory from "./pages/Catagory";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<PostDetail />} />
          <Route path="catagory/:id" element={<Catagory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
