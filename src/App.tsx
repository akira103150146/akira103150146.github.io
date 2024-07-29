import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import English from "./pages/English";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route index element={Home()}/>
          <Route path="/english-class" element={English()}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
