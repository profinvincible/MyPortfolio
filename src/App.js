// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
// import ErrorBoundary from "./components/ErrorBoundary";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ErrorBoundary from "./components/ErrorBoundary"; // Import the ErrorBoundary component

function App() {
  return (
    <Router>
      <ErrorBoundary> {/* Wrap the Routes or individual Route with ErrorBoundary */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;


