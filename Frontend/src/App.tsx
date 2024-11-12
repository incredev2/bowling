import "./App.css";
import { Header } from "./components";
import { NameProvider } from "./context/nameContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Entry, Playground } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <NameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </NameProvider>
    </BrowserRouter>
  );
}

export default App;
