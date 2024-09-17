import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { HowAgileIsYourTeam } from "./pages/HowAgileIsYourTeam";
import WhichAgilePrincipleAreYou from "./pages/WhichAgilePrinciple";

function App() {
  return (
    <main className="size-full">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="which-principle"
            element={<WhichAgilePrincipleAreYou />}
          />
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
