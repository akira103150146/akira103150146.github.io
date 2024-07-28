import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Ruletto from "./pages/Ruletto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route index element={Ruletto()}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
