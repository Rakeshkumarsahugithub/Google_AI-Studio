import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LayoutWrapper from "./MainLayoutWrapper";
import Stream from "./pages/Stream";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studio/chat" element={<Home />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
