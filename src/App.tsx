import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { WhitchAgilePrinciple } from "./pages/WhichAgilePrinciple";
import { Main } from "./pages/Main";
import { HowAgileIsYourTeam } from "./pages/HowAgileIsYourTeam";

function App() {
  return (
    <main>
      
      <Router>
        <Routes>
          <Route path="/" element={ <Main/>}/>
          <Route path="which-principle" element={<WhitchAgilePrinciple />} />
          <Route
            path="how-agile-is-your-team"
            element={<HowAgileIsYourTeam />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
