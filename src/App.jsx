import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />

          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
